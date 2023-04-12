import React from 'react';
import { Alert } from 'react-native';

import { ListItem } from '@getluko/streamline';
import { DocList } from '../components/DocList';

const ICON_NAME = 'Area';
const LONG_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.';
const ON_PRESS = () => Alert.alert('item pressed');

const LIST_ITEMS: JSX.Element[] = [
  <ListItem
    description="Description"
    header="Header"
    iconName={ICON_NAME}
    key="Simple list item"
    title="Title"
  />,
  <ListItem
    description="Description"
    header="Header"
    iconName={ICON_NAME}
    key="List item with on Press"
    onPress={ON_PRESS}
    title="Title"
  />,
  <ListItem
    description={LONG_DESCRIPTION}
    header="Header"
    iconName={ICON_NAME}
    key="List item with on Press and long description"
    onPress={ON_PRESS}
    title="Title"
  />,
  <ListItem
    description="Description"
    header="Header"
    iconName={ICON_NAME}
    key="List item with on right option"
    onPress={ON_PRESS}
    rightOption={{
      accessibilityLabel: 'Test',
      iconName: 'Info',
      onPress: () => Alert.alert('right icon pressed'),
    }}
    title="Title"
  />,
  <ListItem
    description="Description"
    header="Header"
    iconName={ICON_NAME}
    key="List item with on divider"
    onPress={ON_PRESS}
    showDivider
    title="Title"
  />,
];

export const ListItemSandbox = () => <DocList docs={LIST_ITEMS} margin="md" />;
