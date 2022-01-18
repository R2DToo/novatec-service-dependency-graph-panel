import React from 'react';
import { RadioButtonGroup } from '@grafana/ui';
import { StandardEditorProps } from '@grafana/data';

export const AppearanceSwitch: React.FC<StandardEditorProps<boolean>> = ({ value, onChange }) => {
  const options = [
    { label: 'Alerts', value: false },
    { label: 'Impact Severity', value: true },
  ];

  return <RadioButtonGroup options={options} value={value} onChange={(v) => onChange(v)} />;
};
