import React from 'react';
import { Alert } from 'react-native';

import { ListItemValue } from '@getluko/streamline';
import { DocList } from '../components/DocList';
import { sleep } from '../sandbox.utils';

const ICON_NAME = 'Area';
const LONG_HEADER =
  'This is an unrealistically long header that will cause the text to wrap';
const LONG_TITLE = 'This is a long title that will wrap';
const LONG_DESCRIPTION =
  'This is an unrealistically long description that will wrap to the next line';
const LONG_VALUE = 'Value that pushes the title';
const ON_PRESS = () => Alert.alert('item pressed');
const ASYNC_ON_PRESS = async () => {
  await sleep(2000);
  Alert.alert('async pressed completed');
};

const LIST_ITEMS: JSX.Element[] = [
  <ListItemValue
    description="Description"
    header="Header"
    iconName={ICON_NAME}
    key="Simple list item"
    title="Title"
    value="Value"
  />,
  <ListItemValue
    iconName={ICON_NAME}
    key="Simple list item with only title and icon"
    title="Title"
    value="Value"
  />,
  <ListItemValue
    description="List item with on Press"
    header="Header"
    iconName={ICON_NAME}
    key="List item with on Press"
    onPress={ON_PRESS}
    title="Title"
    value="Value"
  />,
  <ListItemValue
    iconName={ICON_NAME}
    key="List item with long value and title"
    onPress={ON_PRESS}
    title={LONG_TITLE}
    value={LONG_VALUE}
  />,
  <ListItemValue
    description={LONG_DESCRIPTION}
    header={LONG_HEADER}
    iconName={ICON_NAME}
    key="List item with very long value"
    onPress={ON_PRESS}
    rightOption={{
      accessibilityLabel: 'Test',
      iconName: 'Info',
      onPress: ASYNC_ON_PRESS,
    }}
    title={LONG_TITLE}
    value={`${LONG_VALUE} but ends up wrapping`}
  />,
  <ListItemValue
    description={LONG_DESCRIPTION}
    header={LONG_HEADER}
    iconName={ICON_NAME}
    key="List item with long title"
    onPress={ON_PRESS}
    title={LONG_TITLE}
    value="Value"
  />,
  <ListItemValue
    description="List item with async on Press"
    header="Header"
    iconName={ICON_NAME}
    key="List item with async on Press"
    onPress={ASYNC_ON_PRESS}
    title="Title"
    value="Value"
  />,
  <ListItemValue
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
    value="Value"
  />,
  <ListItemValue
    description="List item with divider"
    header="Header"
    iconName={ICON_NAME}
    key="List item with on divider"
    onPress={ON_PRESS}
    showDivider
    title="Title"
    value="Value"
  />,
  <ListItemValue
    description="List item with onPress and no header "
    iconName={ICON_NAME}
    key="List item with divider and no icon"
    showDivider
    onPress={ON_PRESS}
    title="Title"
    value="Value"
  />,
  <ListItemValue
    description="List item with right option and no header"
    iconName={ICON_NAME}
    key="List item with divider and no icon"
    showDivider
    rightOption={{
      accessibilityLabel: 'Test',
      iconName: 'Info',
      onPress: ASYNC_ON_PRESS,
    }}
    title="Title"
    value="Value"
  />,
  <ListItemValue
    description="List item with divider and no icon"
    key="List item with divider and no icon"
    showDivider
    onPress={ON_PRESS}
    title="Title"
    value="Value"
  />,
  <ListItemValue
    description="List item with right option and divider"
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
    value="Value"
  />,
  <ListItemValue
    description="Skeleton list item"
    header="Header"
    iconName={ICON_NAME}
    isSkeleton
    key="Skeleton list item"
    title="Title"
    value="Value"
  />,
];

export const ListItemValueSandbox = () => (
  <DocList docs={LIST_ITEMS} margin="md" />
);
