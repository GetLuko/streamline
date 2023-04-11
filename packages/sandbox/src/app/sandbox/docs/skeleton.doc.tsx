import { Skeleton } from '@getluko/streamline';
import { DocList } from '../components/DocList';

const SKELETONS: JSX.Element[] = [
  <Skeleton shape="square" size="sm" />,
  <Skeleton shape="square" size="md" />,
  <Skeleton shape="square" size="lg" />,
  <Skeleton shape="square" size="xl" />,
  <Skeleton shape="row" size="md" />,
  <Skeleton shape="row" size="lg" />,
  <Skeleton shape="row" percentage={25} />,
  <Skeleton shape="row" percentage={50} />,
  <Skeleton shape="row" percentage={75} />,
  <Skeleton shape="row" percentage={100} />,
];

export const SkeletonSandbox = () => <DocList docs={SKELETONS} />;
