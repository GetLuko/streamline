import { InputSlider } from '@getluko/streamline';
import { useState } from 'react';

import { DocList } from '../components/DocList';

export const InputSliderSandbox = () => {
  const [value1, setValue1] = useState(20);
  const [value2, setValue2] = useState(1500);
  const [value3, setValue3] = useState(1500);

  const SLIDERS = [
    <InputSlider
      maximum={40}
      measurement="Meters"
      minimum={16}
      onChange={setValue1}
      step={2}
      value={value1}
    />,
    <InputSlider
      maximum={2000}
      measurement="Meters"
      minimum={0}
      onChange={setValue2}
      step={500}
      value={value2}
    />,
    <InputSlider
      isDisabled
      maximum={2000}
      measurement="Meters"
      minimum={0}
      onChange={setValue3}
      step={50}
      value={value3}
    />,
  ];

  return <DocList docs={SLIDERS} />;
};
