import { PanelSettings } from '../types';

export const DefaultSettings: PanelSettings = {
  animate: true,

  dataMapping: {
    aggregationType: 'app',
    sourceColumn: 'origin_app',
    targetColumn: 'target_app',

    responseTimeColumn: 'response-time',
    requestRateColumn: 'req_rate',
    errorRateColumn: 'error-rate',
    responseTimeOutgoingColumn: 'response-time-out',
    requestRateOutgoingColumn: 'request-rate-out',
    errorRateOutgoingColumn: 'error-rate-out',

    extOrigin: 'external_origin',
    extTarget: 'external_target',
    type: 'type',
    classColumn: 'type',

    baselineRtUpper: 'threshold',

    showDummyData: false,
  },

  sumTimings: true,
  filterEmptyConnections: false,
  showDebugInformation: false,
  showConnectionStats: false,
  showBaselines: false,

  style: {
    healthyColor: 'rgb(242, 72, 91)',
    dangerColor: 'rgb(196, 22, 42)',
    noDataColor: 'rgb(114, 190, 104)',
  },

  icons: [
    {
      pattern: 'Agent Client Collector',
      filename: 'agent',
    },
    {
      pattern: 'Application',
      filename: 'app_service',
    },
    {
      pattern: 'Application Service',
      filename: 'app_service',
    },
    {
      pattern: 'Cluster',
      filename: 'cluster',
    },
    {
      pattern: 'Datacenter',
      filename: 'datacenter',
    },
    {
      pattern: 'Image',
      filename: 'image',
    },
    {
      pattern: 'Cloud Gateway',
      filename: 'gateway',
    },
    {
      pattern: 'Availability Zone',
      filename: 'availability_set',
    },
    {
      pattern: 'Cloud DataBase',
      filename: 'db_sql',
    },
    {
      pattern: 'Cloud LB IPAddress',
      filename: 'ip',
    },
    {
      pattern: 'Cloud Load Balancer',
      filename: 'loadbalancer',
    },
    {
      pattern: 'Cloud Function',
      filename: 'cloud_function',
    },
    {
      pattern: 'Cloud Object Storage',
      filename: 'storage',
    },
    {
      pattern: 'Compute Security Group',
      filename: 'group',
    },
    {
      pattern: 'Cloud Service Account',
      filename: 'Account',
    },
    {
      pattern: 'Cloud Network',
      filename: 'cloud',
    },
    {
      pattern: 'Virtual Machine Instance',
      filename: 'virtual_machine2',
    },
    {
      pattern: 'File System',
      filename: 'directory',
    },
    {
      pattern: 'AWS Datacenter',
      filename: 'datacenter',
    },
    {
      pattern: 'Storage Mapping',
      filename: 'storage',
    },
    {
      pattern: 'VNIC Endpoint',
      filename: 'virtual_network',
    },
    {
      pattern: 'DNS Name',
      filename: 'dns',
    },
    {
      pattern: 'Subnet Endpoint',
      filename: 'route',
    },
    {
      pattern: 'Cloud Mgmt Network Interface',
      filename: 'network_interface',
    },
    {
      pattern: 'MySQL Instance',
      filename: 'db_mysql',
    },
    {
      pattern: 'Docker Engine',
      filename: 'docker_engine',
    },
    {
      pattern: 'Disk Partition|Disk',
      filename: 'disk',
    },
    {
      pattern: 'IP Address',
      filename: 'ip',
    },
    {
      pattern: 'Network Adapter',
      filename: 'network_interface',
    },
    {
      pattern: 'Storage Device',
      filename: 'storage',
    },
    {
      pattern: 'Windows Server',
      filename: 'windows',
    },
    {
      pattern: 'Linux Server',
      filename: 'linux',
    },
    {
      pattern: 'Kubernetes Service',
      filename: 'k8s-svc',
    },
    {
      pattern: 'Kubernetes Pod',
      filename: 'k8s-pod',
    },
    {
      pattern: 'Kubernetes Namespace',
      filename: 'k8s-ns',
    },
    {
      pattern: 'Kubernetes Deployment',
      filename: 'k8s-deploy',
    },
    {
      pattern: 'Kubernetes Cluster',
      filename: 'k8s-cluster',
    },
    {
      pattern: 'Kubernetes Node',
      filename: 'k8s-node',
    },
    {
      pattern: 'Kubernetes DaemonSet|Kubernetes StatefulSet',
      filename: 'k8s-ds',
    },
    {
      pattern: 'Load Balancer Service',
      filename: 'loadbalance_svc',
    },
    {
      pattern: 'F5 BIG-IP',
      filename: 'f5_loadbalancer',
    },
    {
      pattern: 'Docker Container|Docker Image',
      filename: 'docker_container',
    },
    {
      pattern: 'ServiceNow Application Component',
      filename: 'app_service',
    },
    {
      pattern: 'ServiceNow Application',
      filename: 'app_service',
    },
    {
      pattern: 'ServiceNow MID Server',
      filename: 'server2',
    },
    {
      pattern: 'Kubernetes Volume',
      filename: 'k8s-volume',
    },
    {
      pattern: 'Tag-Based Application Service',
      filename: 'tag',
    },
    {
      pattern: 'VMware vCenter Network',
      filename: 'network_interface',
    },
    {
      pattern: 'ESX Server',
      filename: 'server',
    },
    {
      pattern: 'Virtual Machine Instance',
      filename: 'virtual_machine2',
    },
    {
      pattern: 'Server Chassis',
      filename: 'server2',
    },
    {
      pattern: 'Switch|IP Switch',
      filename: 'switch',
    },
    {
      pattern: 'Business Service',
      filename: 'business_svc',
    },
    {
      pattern: 'IP Router',
      filename: 'router',
    },
    {
      pattern: 'MSFT SQL Instance',
      filename: 'db_sql',
    },
    {
      pattern: 'Web Server',
      filename: 'web_server',
    },
    {
      pattern: 'HTTP',
      filename: 'web',
    },
    {
      pattern: 'Web Site',
      filename: 'web_site',
    },
    {
      pattern: 'Router Interface',
      filename: 'network_interface',
    },
    {
      pattern: 'Virtual Machine Instance',
      filename: 'virtual_machine2',
    },
    {
      pattern: 'Resource Group',
      filename: 'resource_group',
    },
    {
      pattern: 'File System',
      filename: 'disk',
    },
    {
      pattern: 'Cloud Mgmt Network Interface',
      filename: 'network_interface',
    },
    {
      pattern: 'Cloud Service Account',
      filename: 'Account',
    },
    {
      pattern: 'Availability Zone',
      filename: 'availability_set',
    },
    {
      pattern: '',
      filename: 'default',
    },
  ],

  externalIcons: [
    {
      pattern: 'web',
      filename: 'web',
    },
    {
      pattern: 'jms',
      filename: 'message',
    },
    {
      pattern: 'jdbc',
      filename: 'database',
    },
    {
      pattern: 'http',
      filename: 'http',
    },
  ],

  drillDownLink:
    '/d/AEOITnWnz?var-ci={node}&var-ciClasses={nodeClass}&var-childTopo=$childTopo&var-parentTopo=$parentTopo',
  timeFormat: 'm',
  datasourceName: 'servicenow-optimiz-plugin',
};
