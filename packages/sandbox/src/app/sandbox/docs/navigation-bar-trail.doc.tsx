import {NavigationBarTrail, NavigationTitle} from '@getluko/streamline';

import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <NavigationBarTrail/>
];

export const NavigationBarTrailSandbox = () => <DocList docs={docs} />;
