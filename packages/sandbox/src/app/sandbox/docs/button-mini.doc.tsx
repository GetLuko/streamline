import { Button } from '@getluko/streamline';
import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <Button iconName="Bear" size="mini" appearance="primary" text="Primary" />,
  <Button
    iconName="Bear"
    size="mini"
    appearance="primary"
    isDisabled
    text="Disabled"
  />,
  <Button
    iconName="Bear"
    size="mini"
    appearance="secondary"
    text="Secondary"
  />,
  <Button iconName="Bear" size="mini" appearance="neutral" text="Neutral" />,
  <Button iconName="Bear" size="mini" appearance="danger" text="Danger" />,
  <Button iconName="Bear" size="mini" appearance="warning" text="Warning" />,
  <Button iconName="Bear" size="mini" isSkeleton text="Skeleton" />,
  <Button text="Primary" size="mini" isLoading appearance="primary" />,
  <Button text="secondary" size="mini" isLoading appearance="secondary" />,
  <Button text="neutral" size="mini" isLoading appearance="neutral" />,
  <Button text="danger" size="mini" isLoading appearance="danger" />,
  <Button text="warning" size="mini" isLoading appearance="warning" />,
];

export const ButtonMiniSandbox = () => <DocList docs={docs} />;
