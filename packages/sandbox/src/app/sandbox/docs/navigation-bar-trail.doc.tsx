import {
  NavigationBarTrail,
  IconsName,
  NavigationBarTrailProps,
} from '@getluko/streamline';

import { DocList } from '../components/DocList';

const left: NavigationBarTrailProps['left'] = {
  type: 'back',
  onPress: async () => {
    console.log('pressed');
  },
};

const right: NavigationBarTrailProps['right'] = {
  accessibilityLabel: 'Go back',
  iconName: 'Plus',
  onPress: async () => {
    console.log('pressed');
  },
};

const action = {
  title: 'Action',
  onPress: async () => {
    console.log('pressed');
  },
};
const docs: JSX.Element[] = [
  <NavigationBarTrail
    appearance="primary"
    left={{ ...left, type: 'close' }}
    right={right}
    title="Title"
    action={action}
  />,

  <NavigationBarTrail
    left={left}
    right={right}
    title="Title"
    action={action}
    appearance="dark"
  />,
  <NavigationBarTrail right={right} title="Title" appearance="primary" />,
  <NavigationBarTrail
    left={left}
    right={right}
    backgroundColor="BLUKO_500"
    title="Title"
    action={action}
    appearance="light"
  />,
  <NavigationBarTrail
    right={right}
    appearance="light"
    backgroundColor="BLUKO_500"
  />,
  <NavigationBarTrail
    left={left}
    appearance="light"
    backgroundColor="ORANGE_700"
  />,
  <NavigationBarTrail
    title="Title"
    appearance="light"
    backgroundColor="ORANGE_700"
  />,
];

export const NavigationBarTrailSandbox = () => <DocList docs={docs} />;
