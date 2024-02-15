import { InputSearch } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <InputSearch placeholder="Placeholder" />,
  <InputSearch placeholder="Search" />,
];

export const InputSearchSandbox = () => <DocList docs={docs} />;
