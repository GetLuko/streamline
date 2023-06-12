import { InputDatePicker } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <InputDatePicker
    label="Title"
    placeholder="Placeholder"
    description="Description"
  />,
  <InputDatePicker
    label="Date"
    placeholder="Placeholder"
    description="Description"
    date={new Date('2023-06-07')}
  />,
];

export const InputDatePickerSandbox = () => <DocList docs={docs} />;
