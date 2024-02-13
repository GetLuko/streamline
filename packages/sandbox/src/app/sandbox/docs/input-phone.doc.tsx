import { InputPhone } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <InputPhone countryCode="FR" label="Default" placeholder="0606060606" />,
  <InputPhone
    countryCode="US"
    isFocused
    label="Focus"
    placeholder="0606060606"
  />,
  <InputPhone
    countryCode="GB"
    isError
    label="Error"
    description="Error message"
    placeholder="0606060606"
  />,
  <InputPhone
    countryCode="DE"
    isDisabled
    label="Disabled"
    description="Description"
    placeholder="0606060606"
  />,
];

export const InputPhoneSandbox = () => <DocList docs={docs} />;
