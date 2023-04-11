import { DocList } from '../components/DocList';
import { Checkbox } from '@getluko/streamline';

const docs: JSX.Element[] = [
  <Checkbox value={false} />,
  <Checkbox value={false} disabled />,
  <Checkbox value={true} />,
  <Checkbox value={true} disabled />,
  <Checkbox appearance="danger" value={false} />,
  <Checkbox appearance="danger" value={false} disabled />,
  <Checkbox appearance="danger" value={true} />,
  <Checkbox appearance="danger" value={true} disabled />,
];

export const CheckboxSandbox = () => <DocList docs={docs} />;
