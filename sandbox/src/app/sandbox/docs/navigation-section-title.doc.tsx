import {
  NavigationSectionTitle,
  NavigationSectionTitleProps,
} from '@getluko/streamline';

import { DocList } from '../components/DocList';

const action: NavigationSectionTitleProps['rightComponent'] = {
  type: 'action',
  onPress: () => {
    return;
  },
  title: 'See All',
};

const switchProps: NavigationSectionTitleProps['rightComponent'] = {
  type: 'switch',
  action: () => {
    return;
  },
  value: true,
};

const docs: JSX.Element[] = [
  <NavigationSectionTitle
    title="Title"
    description="Description of the section"
  />,
  <NavigationSectionTitle
    title="Title"
    description="Description of the section"
    rightComponent={switchProps}
  />,
  <NavigationSectionTitle
    title="Title"
    description="Description of the section"
    rightComponent={action}
  />,
  <NavigationSectionTitle title="Title" />,
  <NavigationSectionTitle
    title="Title"
    rightComponent={{ ...switchProps, value: false }}
  />,
  <NavigationSectionTitle title="Title" rightComponent={action} />,
];

export const NavigationSectionTitleSandbox = () => <DocList docs={docs} />;
