import { InputText } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <InputText label="Title" placeholder="Placeholder" />,
  <InputText label="Focus" placeholder="Placeholder" isFocused />,
  <InputText
    label="Error"
    placeholder="Placeholder"
    description="Description"
    isError
  />,
  <InputText
    label="Disabled"
    placeholder="Placeholder"
    isDisabled
    description="Description"
  />,
  <InputText label="Unit" placeholder="Placeholder" unit="Kw/h" />,
  <InputText label="Password" placeholder="Placeholder" type="password" />,
];

export const InputTextSandbox = () => <DocList docs={docs} />;
