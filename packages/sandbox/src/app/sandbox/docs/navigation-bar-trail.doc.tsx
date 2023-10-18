import {
  NavigationBarTrail,
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

const title = 'Title';
const longTitle =
  'Super long title that should be truncated even when there is no other stuff';

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
    title={title}
    action={action}
  />,

  <NavigationBarTrail
    left={left}
    right={right}
    title={title}
    action={action}
    appearance="dark"
  />,
  <NavigationBarTrail right={right} title="Title" appearance="primary" />,
  <NavigationBarTrail
    left={left}
    right={right}
    backgroundColor="BLUKO_500"
    title={title}
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
    title={title}
    appearance="light"
    backgroundColor="ORANGE_700"
  />,
  <NavigationBarTrail
    title={longTitle}
    left={left}
    right={right}
    action={action}
    appearance="primary"
  />,
  <NavigationBarTrail
    title={longTitle}
    right={right}
    action={action}
    appearance="primary"
  />,
  <NavigationBarTrail
    title={longTitle}
    left={left}
    action={action}
    appearance="primary"
  />,
  <NavigationBarTrail title={longTitle} action={action} appearance="primary" />,
  <NavigationBarTrail title={longTitle} right={right} appearance="primary" />,
  <NavigationBarTrail title={longTitle} left={left} appearance="primary" />,
];

export const NavigationBarTrailSandbox = () => <DocList docs={docs} />;
