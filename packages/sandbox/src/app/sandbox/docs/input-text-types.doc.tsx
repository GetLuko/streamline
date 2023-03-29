import { InputText } from '@getluko/streamline';
import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <InputText label="Password" placeholder="Placeholder" type="password" />,
  <InputText label="Calendar" placeholder="Placeholder" type="calendar" />,
  <InputText label="Select" placeholder="Placeholder" type="select" />,
];
/*
WIP
<InputText label='Search' placeholder="Placeholder" isSearchInput  />
<InputText label='Textarea' placeholder="Placeholder" multiline numberOfLines={5} />
*/

export const InputTextTypesSandbox = () => <DocList docs={docs} />;
