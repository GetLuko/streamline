import { InputSliderRange } from '@getluko/streamline';
import { useState } from 'react';

import { DocList } from '../components/DocList';

export const InputSliderRangeSandbox = () => {
  const [valueStart1, setValueStart1] = useState(20);
  const [valueEnd1, setValueEnd1] = useState(100);
  const [valueStart2, setValueStart2] = useState(1000);
  const [valueEnd2, setValueEnd2] = useState(1500);
  const [valueStart3, setValueStart3] = useState(1000);
  const [valueEnd3, setValueEnd3] = useState(1500);

  const SLIDERS = [
    <InputSliderRange
      connector="to"
      maximum={400}
      measurement="m²"
      minimum={0}
      onChangeStart={setValueStart1}
      onChangeEnd={setValueEnd1}
      step={20}
      startValue={valueStart1}
      endValue={valueEnd1}
    />,
    <InputSliderRange
      connector="to"
      maximum={2500}
      measurement="Meters"
      minimum={500}
      onChangeStart={setValueStart2}
      onChangeEnd={setValueEnd2}
      step={250}
      startValue={valueStart2}
      endValue={valueEnd2}
    />,
    <InputSliderRange
      connector="to"
      isDisabled
      maximum={2500}
      measurement="Meters"
      minimum={500}
      onChangeStart={setValueStart3}
      onChangeEnd={setValueEnd3}
      step={250}
      startValue={valueStart3}
      endValue={valueEnd3}
    />,
  ];

  return <DocList docs={SLIDERS} />;
};
