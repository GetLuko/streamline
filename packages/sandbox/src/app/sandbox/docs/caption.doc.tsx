import { DocList } from '../components/DocList';
import { Caption } from '@getluko/streamline';

const CARDS: JSX.Element[] = [
  <Caption appearance="neutral" text="Description" />,
  <Caption appearance="warning" text="Description" />,
  <Caption appearance="danger" text="Description" />,
];

export const CaptionSandbox = () => <DocList docs={CARDS} margin="md" />;
