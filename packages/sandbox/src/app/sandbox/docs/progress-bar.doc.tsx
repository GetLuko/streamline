import { ProgressBar } from '@getluko/streamline';
import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <ProgressBar progress={0} />,
  <ProgressBar progress={25} />,
  <ProgressBar progress={50} />,
  <ProgressBar progress={75} />,
  <ProgressBar progress={100} />,
  <ProgressBar progress={0} size={'sm'} />,
  <ProgressBar progress={25} size={'sm'} />,
  <ProgressBar progress={50} size={'sm'} />,
  <ProgressBar progress={75} size={'sm'} />,
  <ProgressBar progress={100} size={'sm'} />,

  <ProgressBar progress={0} appearance="dark" />,
  <ProgressBar progress={25} appearance="dark" />,
  <ProgressBar progress={50} appearance="light" />,
  <ProgressBar progress={75} appearance="light" />,
  <ProgressBar progress={100} />,
  <ProgressBar progress={0} size={'sm'} />,
  <ProgressBar progress={25} size={'sm'} />,
  <ProgressBar progress={50} size={'sm'} />,
  <ProgressBar progress={75} size={'sm'} />,
  <ProgressBar progress={100} size={'sm'} />,
];

export const ProgressBarSandbox = () => <DocList docs={docs} />;
