import { InputTextArea } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <InputTextArea
    label="Title"
    placeholder="Placeholder"
    description="Description"
  />,
  <InputTextArea label="Focus" placeholder="Placeholder" isFocused />,
  <InputTextArea
    label="Error"
    placeholder="Placeholder"
    description="Description"
    isError
  />,
  <InputTextArea
    label="Disabled"
    placeholder="Placeholder"
    isDisabled
    description="Description"
  />,
];

export const InputTextAreaSandbox = () => <DocList docs={docs} />;
