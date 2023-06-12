import { InputSelect } from '@getluko/streamline';
import { Alert } from 'react-native';

import { DocList } from '../components/DocList';

const onPress = () => Alert.alert('Pressed');

const docs: JSX.Element[] = [
  <InputSelect label="Select" placeholder="Placeholder" onPress={onPress} />,
  <InputSelect
    label="Error"
    placeholder="Placeholder"
    isError
    description="error"
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
