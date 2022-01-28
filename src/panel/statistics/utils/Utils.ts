export function roundPercentageToDecimal(decimal: number, value: string) {
  if (value !== '-') {
    var valueDecimals = _getDecimalsOf(parseFloat(value));
    if (valueDecimals > decimal) {
      value = parseFloat(value).toFixed(decimal) + '%';
    }
  }
  return value;
}

export function _getDecimalsOf(value: number) {
  if (Math.floor(value) !== value) {
    return value.toString().split('.')[1].length || 0;
  }
  return 0;
}

export function impactNumToString(impact: number) {
  switch (impact) {
    case 5:
      return 'OK';
    case 4:
      return 'Warning';
    case 3:
      return 'Minor';
    case 2:
      return 'Major';
    case 1:
      return 'Critical';
    default:
      return 'OK';
  }
}
