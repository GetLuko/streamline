import { Switch } from '@getluko/streamline';
import { useState } from 'react';

import { DocList } from '../components/DocList';

export const SwitchSandbox = () => {
  const [value, setValue] = useState(false);
  const toggle = () => setValue(!value);
  const data = [
    <Switch onChange={toggle} value={value} />,
    <Switch onChange={toggle} value={!value} />,
  ];
  return <DocList docs={data} margin="md" />;
};
