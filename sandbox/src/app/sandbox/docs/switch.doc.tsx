import { Switch } from '@getluko/streamline';
import { useState } from 'react';

import { DocList } from '../components/DocList';

export const SwitchSandbox = () => {
  const [value, setValue] = useState(false);
  const toggle = () => setValue(!value);
  const data = [
    <Switch action={toggle} value={value} />,
    <Switch action={toggle} value={!value} />,
  ];
  return <DocList docs={data} margin="md" />;
};
