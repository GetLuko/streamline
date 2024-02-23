import { ListItem } from '@getluko/streamline';
import React from 'react';

import { DocList } from '../components/DocList';
import { sleep } from '../sandbox.utils';

const ICON_NAME = 'Area';
const LONG_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.';
const ON_PRESS = () => console.log('item pressed');
const ASYNC_ON_PRESS = async () => {
  await sleep(2000);
  console.log('async pressed completed');
};

const LIST_ITEMS: JSX.Element[] = [
  <ListItem
    description="Description"
    header="Header"
    iconName={ICON_NAME}
    key="Simple list item"
    title="Title"
  />,
  <ListItem
    iconName={ICON_NAME}
    key="Simple list item with only title and icon"
    title="Title"
  />,
  <ListItem
    description="Description"
    key="Simple list item with only title and description"
    title="Title"
  />,
  <ListItem
    description="List item with on Press"
    header="Header"
    iconName={ICON_NAME}
    key="List item with on Press"
    onPress={ON_PRESS}
    title="Title"
  />,
  <ListItem
    description="List item disabled"
    header="Header"
    iconName={ICON_NAME}
    isDisabled
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
    description="List item with async on Press"
    header="Header"
    iconName={ICON_NAME}
    key="List item with async on Press"
    onPress={ASYNC_ON_PRESS}
    title="Title"
  />,
  <ListItem
    description="List item with right option"
    header="Header"
    iconName={ICON_NAME}
    key="List item with right option"
    onPress={ON_PRESS}
    rightOption={{
      accessibilityLabel: 'Test',
      iconName: 'Info',
      onPress: ASYNC_ON_PRESS,
    }}
    title="Title"
  />,
  <ListItem
    description="List item with divider"
    header="Header"
    iconName={ICON_NAME}
    key="List item with on divider"
    onPress={ON_PRESS}
    showDivider
    title="Title"
  />,
  <ListItem
    description="List item with divider and no icon"
    key="List item with divider and no icon"
    showDivider
    title="Title"
  />,
  <ListItem
    description="List item with icon right option and divider"
    header="Header"
    iconName={ICON_NAME}
    key="List item with right option and divider"
    onPress={ON_PRESS}
    rightOption={{
      accessibilityLabel: 'Test',
      iconName: 'Info',
      onPress: ASYNC_ON_PRESS,
    }}
    showDivider
    title="Title"
    appearance="danger"
  />,
  <ListItem
    description="List item with tag right option and divider"
    header="Header"
    iconName={ICON_NAME}
    key="List item with right option and divider"
    onPress={ON_PRESS}
    rightOption={{
      accessibilityLabel: 'Test',
      appearance: 'success',
      text: 'Tag',
      type: 'tag',
      iconName: 'Bulb',
    }}
    showDivider
    title="Title"
  />,
  <ListItem
    description="Skeleton list item"
    header="Header"
    iconName={ICON_NAME}
    isSkeleton
    key="Skeleton list item"
    title="Title"
  />,
];

export const ListItemSandbox = () => <DocList docs={LIST_ITEMS} margin="md" />;
