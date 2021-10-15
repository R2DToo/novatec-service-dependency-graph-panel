import { ArrayVector, DataFrame, FieldType } from '@grafana/data';

const data: DataFrame[] = [
  {
    refId: 'A',
    name: undefined,
    meta: undefined,
    fields: [
      {
        name: 'time',
        type: FieldType.time,
        config: {},
        values: new ArrayVector([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
      },
      {
        name: 'origin_external',
        type: FieldType.string,
        config: {},
        values: new ArrayVector([
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          'tcp://localhost:61616',
          'tcp://10.10.10.10:61616',
        ]),
      },
      {
        name: 'origin_service',
        type: FieldType.string,
        config: {},
        values: new ArrayVector([
          '',
          '',
          '',
          'api-gateway',
          'api-gateway',
          'api-gateway',
          'api-gateway',
          'api-gateway',
          'customers-service',
          'vets-service',
          'visits-service',
          'vets-service',
          '',
        ]),
      },
      {
        name: 'protocol',
        type: FieldType.string,
        config: {},
        values: new ArrayVector([
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'jms',
          'jms',
        ]),
      },
      {
        name: 'service',
        type: FieldType.string,
        config: {},
        values: new ArrayVector([
          'api-gateway',
          'config-server',
          'discovery-server',
          'api-gateway',
          'customers-service',
          'discovery-server',
          'vets-service',
          'visits-service',
          'discovery-server',
          'discovery-server',
          'discovery-server',
          'visits-service',
          'api-gateway',
        ]),
      },
      {
        name: 'in_count',
        type: FieldType.number,
        config: {},
        values: new ArrayVector([508, 0, 0, 100, 347, 20, 63, 100, 20, 20, 20, 300, 300]),
      },
    ],
    length: 13,
  },
  {
    refId: 'B',
    name: undefined,
    meta: undefined,
    fields: [
      {
        name: 'time',
        type: FieldType.time,
        config: {},
        values: new ArrayVector([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
      },
      {
        name: 'protocol',
        type: FieldType.string,
        config: {},
        values: new ArrayVector([
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'jms',
          'http',
          'jdbc',
          'jdbc',
          'jdbc',
        ]),
      },
      {
        name: 'service',
        type: FieldType.string,
        config: {},
        values: new ArrayVector([
          'api-gateway',
          'api-gateway',
          'api-gateway',
          'api-gateway',
          'api-gateway',
          'api-gateway',
          'config-server',
          'customers-service',
          'vets-service',
          'vets-service',
          'visits-service',
          'customers-service',
          'vets-service',
          'visits-service',
        ]),
      },
      {
        name: 'target_external',
        type: FieldType.string,
        config: {},
        values: new ArrayVector([
          '',
          '',
          '',
          '',
          '',
          '7a8dce897616:8080',
          'github.com',
          '',
          '',
          'tcp://localhost:61616',
          '',
          'jdbc:hsqldb:mem:testdb',
          'jdbc:hsqldb:mem:testdb',
          'jdbc:hsqldb:mem:testdb',
        ]),
      },
      {
        name: 'target_service',
        type: FieldType.string,
        config: {},
        values: new ArrayVector([
          'api-gateway',
          'customers-service',
          'discovery-server',
          'vets-service',
          'visits-service',
          '',
          '',
          'discovery-server',
          'discovery-server',
          'visits-service',
          'discovery-server',
          '',
          '',
          '',
        ]),
      },
      {
        name: 'out_count',
        type: FieldType.number,
        config: {},
        values: new ArrayVector([100, 347, 20, 62, 100, 0, 0, 20, 20, 300, 20, 1847, 441, 100]),
      },
    ],
    length: 14,
  },
  {
    refId: 'C',
    name: undefined,
    meta: undefined,
    fields: [
      { name: 'time', type: FieldType.time, config: {}, values: new ArrayVector([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) },
      {
        name: 'origin_service',
        type: FieldType.string,
        config: {},
        values: new ArrayVector([
          '',
          '',
          '',
          'api-gateway',
          'api-gateway',
          'api-gateway',
          'api-gateway',
          'api-gateway',
          'customers-service',
          'vets-service',
          'visits-service',
        ]),
      },
      {
        name: 'protocol',
        type: FieldType.string,
        config: {},
        values: new ArrayVector([
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
        ]),
      },
      {
        name: 'service',
        type: FieldType.string,
        config: {},
        values: new ArrayVector([
          'api-gateway',
          'config-server',
          'discovery-server',
          'api-gateway',
          'customers-service',
          'discovery-server',
          'vets-service',
          'visits-service',
          'discovery-server',
          'discovery-server',
          'discovery-server',
        ]),
      },
      {
        name: 'target_external',
        type: FieldType.string,
        config: {},
        values: new ArrayVector(['', '', '', '', '', '', '', '', '', '', '']),
      },
      {
        name: 'in_timesum',
        type: FieldType.number,
        config: {},
        values: new ArrayVector([
          45140.008427999986, 0, 0, 1511.9842349999872, 819.3634589999965, 21.881731999999943, 281.0465210000002,
          325.85070300000007, 21.53124399999996, 21.40604300000001, 20.813048000000038,
        ]),
      },
    ],
    length: 11,
  },
  {
    refId: 'D',
    name: undefined,
    meta: undefined,
    fields: [
      {
        name: 'time',
        type: FieldType.time,
        config: {},
        values: new ArrayVector([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
      },
      {
        name: 'protocol',
        type: FieldType.string,
        config: {},
        values: new ArrayVector([
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'http',
          'jdbc',
          'jdbc',
          'jdbc',
        ]),
      },
      {
        name: 'service',
        type: FieldType.string,
        config: {},
        values: new ArrayVector([
          'api-gateway',
          'api-gateway',
          'api-gateway',
          'api-gateway',
          'api-gateway',
          'api-gateway',
          'config-server',
          'customers-service',
          'vets-service',
          'visits-service',
          'customers-service',
          'vets-service',
          'visits-service',
        ]),
      },
      {
        name: 'target_external',
        type: FieldType.string,
        config: {},
        values: new ArrayVector([
          '',
          '',
          '',
          '',
          '',
          '7a8dce897616:8080',
          'github.com',
          '',
          '',
          '',
          'jdbc:hsqldb:mem:testdb',
          'jdbc:hsqldb:mem:testdb',
          'jdbc:hsqldb:mem:testdb',
        ]),
      },
      {
        name: 'target_service',
        type: FieldType.string,
        config: {},
        values: new ArrayVector([
          'api-gateway',
          'customers-service',
          'discovery-server',
          'vets-service',
          'visits-service',
          '',
          '',
          'discovery-server',
          'discovery-server',
          'discovery-server',
          '',
          '',
          '',
        ]),
      },
      {
        name: 'out_timesum',
        type: FieldType.number,
        config: {},
        values: new ArrayVector([
          1700.468872999987, 1481.533606999972, 540.746261, 501.65547400000014, 394.81158100000175, 0, 0,
          84.59527999999978, 381.87400800000023, 225.65933600000017, 35.9093940000007, 13.000189000000091,
          12.258137999999946,
        ]),
      },
    ],
    length: 13,
  },
  {
    refId: 'E',
    name: undefined,
    meta: undefined,
    fields: [
      { name: 'time', type: FieldType.time, config: {}, values: new ArrayVector([0, 0, 0, 0]) },
      { name: 'origin_service', type: FieldType.string, config: {}, values: new ArrayVector(['', '', '', '']) },
      {
        name: 'protocol',
        type: FieldType.string,
        config: {},
        values: new ArrayVector(['http', 'http', 'http', 'http']),
      },
      {
        name: 'service',
        type: FieldType.string,
        config: {},
        values: new ArrayVector(['api-gateway', 'discovery-server', 'customers-service', 'vets-service']),
      },
      { name: 'target_external', type: FieldType.string, config: {}, values: new ArrayVector(['', '', '', '']) },
      { name: 'error_in', type: FieldType.number, config: {}, values: new ArrayVector([14, 20, 20, 0]) },
    ],
    length: 4,
  },
  {
    refId: 'F',
    name: undefined,
    meta: undefined,
    fields: [
      { name: 'time', type: FieldType.time, config: {}, values: new ArrayVector([0, 0, 0, 0]) },
      {
        name: 'origin_service',
        type: FieldType.string,
        config: {},
        values: new ArrayVector(['api-gateway', 'api-gateway', 'api-gateway', 'customers-service']),
      },
      {
        name: 'protocol',
        type: FieldType.string,
        config: {},
        values: new ArrayVector(['http', 'http', 'http', 'http']),
      },
      {
        name: 'service',
        type: FieldType.string,
        config: {},
        values: new ArrayVector(['customers-service', 'vets-service', 'visits-service', 'discovery-server']),
      },
      { name: 'target_external', type: FieldType.string, config: {}, values: new ArrayVector(['', '', '', '']) },
      { name: 'error_out', type: FieldType.number, config: {}, values: new ArrayVector([14, 0, 0, 20]) },
    ],
    length: 4,
  },
  {
    refId: 'G',
    name: undefined,
    meta: undefined,
    fields: [
      { name: 'time', type: FieldType.time, config: {}, values: new ArrayVector([0, 0]) },
      {
        name: 'service',
        type: FieldType.string,
        config: {},
        values: new ArrayVector(['api-gateway', 'customers-service']),
      },
      { name: 'threshold', type: FieldType.number, config: {}, values: new ArrayVector([40.40604300000001, 10]) },
    ],
    length: 2,
  },
];

export default data;
