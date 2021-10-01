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
    healthyColor: 'rgb(87, 148, 242)',
    dangerColor: 'rgb(196, 22, 42)',
    noDataColor: 'rgb(123, 123, 138)',
  },

  icons: [
    {
      pattern: 'Agent Client Collector',
      filename: 'agent',
    },
    {
      pattern: 'Application',
      filename: 'application_generic',
    },
    {
      pattern: 'Application Service',
      filename: 'application_svc',
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
      filename: 'aws_ami',
    },
    {
      pattern: 'Cloud Gateway',
      filename: 'aws_api_gateway',
    },
    {
      pattern: 'Availability Zone',
      filename: 'aws_availzone',
    },
    {
      pattern: 'Cloud DataBase',
      filename: 'aws_db'
    },
    {
      pattern: 'Cloud LB IPAddress',
      filename: 'aws_elasticip'
    },
    {
      pattern: 'Cloud Load Balancer',
      filename: 'aws_elb'
    },
    {
      pattern: 'Cloud Function',
      filename: 'aws_lambda'
    },
    {
      pattern: 'Cloud Object Storage',
      filename: 'aws_s3'
    },
    {
      pattern: 'Compute Security Group',
      filename: 'aws_securitygroup'
    },
    {
      pattern: 'Cloud Service Account',
      filename: 'aws_service_account'
    },
    {
      pattern: 'Cloud Network',
      filename: 'aws_vpc'
    },
    {
      pattern: 'Virtual Machine Instance',
      filename: 'aws_ec2_compute'
    },
    {
      pattern: 'File System',
      filename: 'aws_volume'
    },
    {
      pattern: 'AWS Datacenter',
      filename: 'aws_ec2_vm'
    },
    {
      pattern: 'Storage Mapping',
      filename: 'storage_volume'
    },
    {
      pattern: 'VNIC Endpoint',
      filename: 'aws_nic'
    },
    {
      pattern: 'DNS Name',
      filename: 'aws_ec2_instance'
    },
    {
      pattern: 'Subnet Endpoint',
      filename: 'aws_internetgw'
    },
    {
      pattern: 'Cloud Mgmt Network Interface',
      filename: 'aws_nic'
    },
    {
      pattern: 'MySQL Instance',
      filename: 'database'
    },
    {
      pattern: 'Docker Engine',
      filename: 'docker_engine'
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
      filename: 'nic',
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
      filename: 'loadbalancer',
    },
    {
      pattern: 'F5 BIG-IP',
      filename: 'loadbalancer',
    },
    {
      pattern: 'Docker Container|Docker Image',
      filename: 'docker_container',
    },
    {
      pattern: 'Manual Endpoint',
      filename: 'manual_entrypoint',
    },
    {
      pattern: 'ServiceNow Application Component',
      filename: 'application_generic',
    },
    {
      pattern: 'ServiceNow Application',
      filename: 'application_svc',
    },
    {
      pattern: 'ServiceNow MID Server',
      filename: 'gear',
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
      filename: 'nic',
    },
    {
      pattern: 'IP Switch',
      filename: 'switch',
    },
    {
      pattern: 'ESX Server',
      filename: 'server',
    },
    {
      pattern: 'Virtual Machine Instance',
      filename: 'virtual_machine',
    },
    {
      pattern: 'Server Chassis',
      filename: 'server',
    },
    {
      pattern: 'Switch',
      filename: 'switch',
    },
    {
      pattern: 'PDU|UPS',
      filename: 'plugin',
    },
    {
      pattern: 'Business Service',
      filename: 'application_svc',
    },
    {
      pattern: 'IP Router',
      filename: 'router',
    },
    {
      pattern: 'MSFT SQL Instance',
      filename: 'database',
    },
    {
      pattern: 'Web Server|Web Site|HTTP',
      filename: 'http',
    },
    {
      pattern: 'Router Interface',
      filename: 'nic',
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

  drillDownLink: '',
  timeFormat: 'm',
  datasourceName: 'servicenow-optimiz-plugin',
};
