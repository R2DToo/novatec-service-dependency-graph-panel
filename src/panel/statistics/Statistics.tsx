import React from 'react';
//import { NodeStatistics } from './NodeStatistics';
import '../../css/novatec-service-dependency-graph-panel.css';
import './Statistics.css';
import { IntSelectionStatistics, TableContent, SummaryTableContent } from 'types';
//import roundPercentageToDecimal from './utils/Utils';

interface StatisticsProps {
  show: boolean;
  selectionId: string | number;
  resolvedDrillDownLink: string;
  selectionStatistics: IntSelectionStatistics;
  currentType: string;
  showBaselines: boolean;
  receiving: TableContent[];
  sending: TableContent[];
  summary: SummaryTableContent[];
}

export const Statistics: React.FC<StatisticsProps> = ({
  show,
  selectionId,
  resolvedDrillDownLink,
  selectionStatistics,
  currentType,
  showBaselines,
  receiving,
  sending,
  summary,
}) => {
  var statisticsClass = 'statistics';
  var statistics = <div></div>;
  if (show) {
    statisticsClass = 'statistics show';
    var drilldownLink = <div></div>;
    if (resolvedDrillDownLink && resolvedDrillDownLink.length > 0) {
      drilldownLink = (
        <a target="_blank" href={resolvedDrillDownLink}>
          <i className="fa fa-paper-plane-o margin"></i>
        </a>
      );
    }

    const summaryTd =
      (summary) ? (
        summary.map(value => {
          return (
            <tr>
              <td className="table--td--selection table--td">{value.name}</td>
              <td className="table--td--selection table--td">{value.value}</td>
            </tr>
          );
        })
      ) : null;


    statistics = (
      <div className="statistics">
        <div className="header--selection">
          {selectionId}
        </div>

        <div className="secondHeader--selection">{drilldownLink}</div>
        <table className="table--selection">
          <tr className="table--selection--head">
            <th className="table--th table--th--selectionMedium">CI Attribute</th>
            <th className="table--th">Value</th>
          </tr>
          {summaryTd}
        </table>
      </div>
    );
  }
  return <div className={statisticsClass}>{statistics}</div>;
};
