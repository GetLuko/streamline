import { Button } from '@getluko/streamline';
import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <Button appearance="primary" text="Primary" />,
  <Button appearance="primary" isDisabled text="Disabled" />,
  <Button appearance="secondary" text="Secondary" />,
  <Button appearance="neutral" text="Neutral" />,
  <Button appearance="danger" text="Danger" />,
  <Button appearance="warning" text="Warning" />,
  <Button isSkeleton text="Skeleton" />,
  <Button text="primary" isLoading appearance="primary" />,
  <Button text="secondary" isLoading appearance="secondary" />,
  <Button text="neutral" isLoading appearance="neutral" />,
  <Button text="danger" isLoading appearance="danger" />,
  <Button text="warning" isLoading appearance="warning" />,
  <Button
    text="promise"
    appearance="primary"
    onPress={async () =>
      setTimeout(() => {
        return true;
      }, 2000)
    }
  />,
];

export const ButtonSandbox = () => <DocList docs={docs} />;
