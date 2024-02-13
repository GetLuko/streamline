import { InputPhone } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <InputPhone countryCode="FR" label="Default" />,
  <InputPhone countryCode="US" isFocused label="Focus" />,
  <InputPhone
    countryCode="GB"
    isError
    label="Error"
    description="Error message"
  />,
  <InputPhone
    countryCode="DE"
    isDisabled
    label="Danger"
    description="Error message"
  />,
];

export const InputPhoneSandbox = () => <DocList docs={docs} />;
