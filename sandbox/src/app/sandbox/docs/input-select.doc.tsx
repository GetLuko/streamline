import { InputSelect } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const onPress = () => console.log('Pressed');

const docs: JSX.Element[] = [
  <InputSelect label="Select" placeholder="Placeholder" onPress={onPress} />,
  <InputSelect
    label="Error"
    placeholder="Placeholder"
    isError
    description="Description"
    onPress={onPress}
  />,
  <InputSelect
    label="Focus"
    placeholder="Placeholder"
    isFocused
    onPress={onPress}
  />,
  <InputSelect label="Value" value="value" onPress={onPress} />,
  <InputSelect label="Value" value="value" isDisabled onPress={onPress} />,
];

export const InputSelectSandbox = () => <DocList docs={docs} />;
