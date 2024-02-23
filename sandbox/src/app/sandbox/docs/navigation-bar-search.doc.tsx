import { NavigationBarSearch } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <NavigationBarSearch placeholder="Search" />,
  <NavigationBarSearch
    placeholder="Search"
    cancelOption={{
      text: 'Cancel',
      onPress: () => console.log('cancel pressed'),
    }}
  />,
];

export const NavigationBarSearchSandbox = () => <DocList docs={docs} />;
