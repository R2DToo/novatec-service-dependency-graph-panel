import CanvasDrawer from 'panel/canvas/graph_canvas';
import cytoscape, { EdgeSingular, ElementDefinition, NodeSingular } from 'cytoscape';
import React from 'react';
import { PureComponent } from 'react';
import { PanelController } from '../PanelController';
import cyCanvas from 'cytoscape-canvas';
import cola from 'cytoscape-cola';
import layoutOptions from '../layout_options';
import { Statistics } from '../statistics/Statistics';
import _ from 'lodash';
import {
  TableContent,
  IntGraph,
  IntGraphNode,
  IntGraphEdge,
  PanelSettings,
  IntSelectionStatistics,
  AlertTableContent,
  SummaryTableContent,
  ChangeTableContent,
} from 'types';
import { TemplateSrv, getTemplateSrv, getDataSourceSrv } from '@grafana/runtime';
import './ServiceDependencyGraph.css';

interface PanelState {
  zoom: number | undefined;
  animate: boolean | undefined;
  controller: PanelController;
  cy?: cytoscape.Core | undefined;
  graphCanvas?: CanvasDrawer | undefined;
  animateButtonClass?: string;
  showStatistics: boolean;
  data: IntGraph;
  settings: PanelSettings;
}

cyCanvas(cytoscape);
cytoscape.use(cola);

export class ServiceDependencyGraph extends PureComponent<PanelState, PanelState> {
  ref: any;

  selectionId: string;

  currentType: string;

  selectionStatistics: IntSelectionStatistics;

  receiving: TableContent[];

  sending: TableContent[];

  resolvedDrillDownLink: string;

  templateSrv: TemplateSrv;

  initResize = true;

  datasourceSrv: any;

  settings: PanelSettings;

  summary: SummaryTableContent[];
  alerts: AlertTableContent[];
  change: ChangeTableContent[];

  constructor(props: PanelState) {
    super(props);

    var animateButtonClass = 'fa fa-play-circle';
    if (props.animate) {
      animateButtonClass = 'fa fa-pause-circle';
    }

    this.state = {
      ...props,
      showStatistics: false,
      animateButtonClass: animateButtonClass,
      animate: false,
    };

    this.ref = React.createRef();
    this.templateSrv = getTemplateSrv();
    this.datasourceSrv = getDataSourceSrv();
  }

  componentDidMount() {
    const cy: any = cytoscape({
      container: this.ref,
      zoom: this.state.zoom,
      elements: this.props.data,
      style: [
        {
          selector: 'node',
          style: {
            'background-opacity': 0,
          },
        },
        {
          selector: 'edge',
          style: {
            visibility: 'hidden',
          },
        },
      ],
      wheelSensitivity: 0.125,
    });

    var graphCanvas = new CanvasDrawer(
      this,
      cy,
      cy.cyCanvas({
        zIndex: 1,
      })
    );

    cy.on('render cyCanvas.resize', () => {
      graphCanvas.repaint(true);
      console.log("render resize");
    });
    cy.on('select', 'node', () => this.onSelectionChange());
    cy.on('unselect', 'node', () => this.onSelectionChange());
    //Zoom in on load
    cy.on('layoutstop', () => {
      this.zoom(1.5);
      this.toggleAnimation();
    });
    this.setState({
      cy: cy,
      graphCanvas: graphCanvas,
    });
    graphCanvas.start();
  }

  componentDidUpdate() {
    this._updateGraph(this.props.data);
  }

  _updateGraph(graph: IntGraph) {
    const cyNodes = this._transformNodes(graph.nodes);
    const cyEdges = this._transformEdges(graph.edges);

    const nodes = this.state.cy.nodes().toArray();
    const updatedNodes = this._updateOrRemove(nodes, cyNodes);

    // add new nodes
    this.state.cy.add(cyNodes);

    const edges = this.state.cy.edges().toArray();
    this._updateOrRemove(edges, cyEdges);

    // add new edges
    this.state.cy.add(cyEdges);

    if (this.initResize) {
      this.initResize = false;
      this.state.cy.resize();
      this.state.cy.reset();
      this.runLayout();
    } else {
      if (cyNodes.length > 0) {
        _.each(updatedNodes, node => {
          node.lock();
        });
        this.runLayout(true);
      }
    }
    this.state.graphCanvas.repaint(true);
  }

  _transformNodes(nodes: IntGraphNode[]): ElementDefinition[] {
    const cyNodes: ElementDefinition[] = _.map(nodes, node => {
      const result: ElementDefinition = {
        group: 'nodes',
        data: {
          id: node.data.id,
          type: node.data.type,
          external_type: node.data.external_type,
          metrics: {
            ...node.data.metrics,
          },
        },
      };
      return result;
    });

    return cyNodes;
  }

  _transformEdges(edges: IntGraphEdge[]): ElementDefinition[] {
    const cyEdges: ElementDefinition[] = _.map(edges, edge => {
      const cyEdge: ElementDefinition = {
        group: 'edges',
        data: {
          id: edge.data.source + ':' + edge.data.target,
          source: edge.data.source,
          target: edge.data.target,
          metrics: {
            ...edge.data.metrics,
          },
        },
      };

      return cyEdge;
    });

    return cyEdges;
  }

  _updateOrRemove(dataArray: Array<NodeSingular | EdgeSingular>, inputArray: ElementDefinition[]) {
    const elements: any[] = []; //(NodeSingular | EdgeSingular)[]
    for (let i = 0; i < dataArray.length; i++) {
      const element = dataArray[i];

      const cyNode = _.find(inputArray, { data: { id: element.id() } });

      if (cyNode) {
        element.data(cyNode.data);
        _.remove(inputArray, n => n.data.id === cyNode.data.id);
        elements.push(element);
      } else {
        element.remove();
      }
    }
    return elements;
  }

  async onSelectionChange() {
    const selection = this.state.cy.$(':selected');

    if (selection.length === 1) {
      await this.updateStatisticTable();
      this.setState({
        showStatistics: true,
      });
    } else {
      this.setState({
        showStatistics: false,
      });
    }
  }

  getSettings(resolveVariables: boolean): PanelSettings {
    return this.state.controller.getSettings(resolveVariables);
  }

  toggleAnimation() {
    var newValue = !this.state.animate;
    var animateButtonClass = 'fa fa-play-circle';
    if (newValue) {
      this.state.graphCanvas.startAnimation();
      animateButtonClass = 'fa fa-pause-circle';
    } else {
      this.state.graphCanvas.stopAnimation();
    }
    this.setState({
      animate: newValue,
      animateButtonClass: animateButtonClass,
    });
  }

  runLayout(unlockNodes = false) {
    const that = this;
    const options = {
      ...layoutOptions,

      stop: function() {
        if (unlockNodes) {
          that.unlockNodes();
        }
        that.setState({
          zoom: that.state.cy.zoom(),
        });
      },
    };

    this.state.cy.layout(options).run();
  }

  unlockNodes() {
    this.state.cy.nodes().forEach((node: { unlock: () => void }) => {
      node.unlock();
    });
  }

  fit() {
    const selection = this.state.graphCanvas.selectionNeighborhood;
    if (selection && !selection.empty()) {
      this.state.cy.fit(selection, 30);
    } else {
      this.state.cy.fit();
    }
    this.setState({
      zoom: this.state.cy.zoom(),
    });
  }

  zoom(zoom: number) {
    const zoomStep = 0.25 * zoom;
    const zoomLevel = Math.max(0.1, this.state.zoom + zoomStep);
    this.setState({
      zoom: zoomLevel,
    });
    this.state.cy.zoom(zoomLevel);
    this.state.cy.center();
  }

  async updateStatisticTable() {
    const selection = this.state.cy.$(':selected');
    if (selection.length === 1) {
      this.selectionStatistics = {};
      const currentNode: NodeSingular = selection[0];
      this.selectionId = currentNode.id().toString();

      const summaryTable: SummaryTableContent[] = [];

      var className = currentNode.data('className').toString();
      console.log("current node: ", className);
      if (typeof currentNode.data('className') !== 'undefined') {
        summaryTable.push({name:"Class",value:className});
      } else {
        let dataSource = await this.datasourceSrv.get(this.state.settings.datasourceName);
        let dataSourceData = await dataSource.snowConnection.getTopologyCISummary(this.selectionId);
        summaryTable.push({name:"Class",value:dataSourceData.classType});
        summaryTable.push({name:"Environment",value:dataSourceData.environment});
        summaryTable.push({name:"Support Group",value:dataSourceData.support_group});
        summaryTable.push({name:"In Maintinance",value:dataSourceData.maintenance_schedule});
      }

      this.summary = summaryTable;
      console.log("Summary Table", this.summary);

      this.generateDrillDownLink();

      // this.currentType = currentNode.data('type');
      // const receiving: TableContent[] = [];
      // const sending: TableContent[] = [];
      // const edges: EdgeCollection = selection.connectedEdges();

      // const metrics: IntGraphMetrics = selection.nodes()[0].data('metrics');

      // const requestCount = _.defaultTo(metrics.rate, -1);
      // const errorCount = _.defaultTo(metrics.error_rate, -1);
      // const duration = _.defaultTo(metrics.response_time, -1);
      // const threshold = _.defaultTo(metrics.threshold, -1);

      // //var requestCount = 1;
      // // var target = { selectedAlertStateList: { value: 'All' }, selectedAlertTypeList: { value: 'None' }, sysparam_query: `cmdb_ci.name=${this.selectionId}` };
      // // var alertData = await dataSource.snowConnection.getAlerts(target, 0, 0, {});
      // // console.log("Alert: ", alertData);

      // if (requestCount >= 0) {
      //   this.selectionStatistics.requests = Math.floor(requestCount);
      // }
      // if (errorCount >= 0) {
      //   this.selectionStatistics.errors = Math.floor(errorCount);
      // }
      // if (duration >= 0) {
      //   this.selectionStatistics.responseTime = Math.floor(duration);

      //   if (threshold >= 0) {
      //     this.selectionStatistics.threshold = Math.floor(threshold);
      //     this.selectionStatistics.thresholdViolation = duration > threshold;
      //   }
      // }

      // for (let i = 0; i < edges.length; i++) {
      //   const actualEdge: EdgeSingular = edges[i];
      //   const sendingCheck: boolean = actualEdge.source().id() === this.selectionId;
      //   let node: NodeSingular;

      //   if (sendingCheck) {
      //     node = actualEdge.target();
      //   } else {
      //     node = actualEdge.source();
      //   }

      //   const sendingObject: TableContent = {
      //     name: node.id(),
      //     responseTime: '-',
      //     rate: '-',
      //     error: '-',
      //   };

      //   const edgeMetrics: IntGraphMetrics = actualEdge.data('metrics');

      //   if (edgeMetrics !== undefined) {
      //     const { response_time, rate, error_rate } = edgeMetrics;

      //     if (rate !== undefined) {
      //       sendingObject.rate = Math.floor(rate).toString();
      //     }
      //     if (response_time !== undefined) {
      //       sendingObject.responseTime = Math.floor(response_time) + ' ms';
      //     }
      //     if (error_rate !== undefined && rate !== undefined) {
      //       sendingObject.error = Math.floor(error_rate / (rate / 100)) + '%';
      //     }
      //   }

      //   if (sendingCheck) {
      //     sending.push(sendingObject);
      //   } else {
      //     receiving.push(sendingObject);
      //   }
      // }
      // this.receiving = receiving;
      // this.sending = sending;

      // this.generateDrillDownLink();
    }
  }

  generateDrillDownLink() {
    const { drillDownLink } = this.getSettings(false);
    if (drillDownLink !== undefined) {
      const link = drillDownLink.replace('{}', this.selectionId);
      this.resolvedDrillDownLink = this.templateSrv.replace(link);
    }
  }

  render() {
    if (this.state.cy !== undefined) {
      this._updateGraph(this.props.data);
    }
    return (
      <div className="graph-container">
        <div className="service-dependency-graph">
          <div className="canvas-container" ref={ref => (this.ref = ref)}></div>
          <div className="zoom-button-container">
            <button className="btn navbar-button width-100" onClick={() => this.toggleAnimation()}>
              <i className={this.state.animateButtonClass}></i>
            </button>
            <button className="btn navbar-button width-100" onClick={() => this.runLayout()}>
              <i className="fa fa-sitemap"></i>
            </button>
            <button className="btn navbar-button width-100" onClick={() => this.fit()}>
              <i className="fa fa-dot-circle-o"></i>
            </button>
            <button className="btn navbar-button width-100" onClick={() => this.zoom(+1)}>
              <i className="fa fa-plus"></i>
            </button>
            <button className="btn navbar-button width-100" onClick={() => this.zoom(-1)}>
              <i className="fa fa-minus"></i>
            </button>
          </div>
        </div>
        <Statistics
          show={this.state.showStatistics}
          selectionId={this.selectionId}
          resolvedDrillDownLink={this.resolvedDrillDownLink}
          selectionStatistics={this.selectionStatistics}
          currentType={this.currentType}
          showBaselines={this.getSettings(true).showBaselines}
          receiving={this.receiving}
          sending={this.sending}
          summary={this.summary}
        />
      </div>
    );
  }
}
