import { ListItemValue } from '@getluko/streamline';
import React from 'react';

import { DocList } from '../components/DocList';
import { sleep } from '../sandbox.utils';

const ICON_NAME = 'Area';
const LONG_HEADER =
  'This is an unrealistically long header that will cause the text to wrap';
const LONG_TITLE = 'This is a long title that will wrap';
const LONG_DESCRIPTION =
  'This is an unrealistically long description that will wrap to the next line';
const LONG_VALUE = 'Value that pushes the title';
const ON_PRESS = () => console.log('item pressed');
const ASYNC_ON_PRESS = async () => sleep(2000);

const LIST_ITEMS: JSX.Element[] = [
  <ListItemValue
    description="Description"
    header="Header"
    iconName={ICON_NAME}
    title="Title"
    value="Value"
  />,
  <ListItemValue iconName={ICON_NAME} title="Title" value="Value" />,
  <ListItemValue
    description="List item with on Press"
    header="Header"
    iconName={ICON_NAME}
    onPress={ON_PRESS}
    title="Title"
    value="Value"
  />,
  <ListItemValue
    description="List item disabled"
    header="Header"
    iconName={ICON_NAME}
    isDisabled
    onPress={ON_PRESS}
    title="Title"
    value="Value"
  />,
  <ListItemValue
    iconName={ICON_NAME}
    onPress={ON_PRESS}
    title={LONG_TITLE}
    value={LONG_VALUE}
  />,
  <ListItemValue
    description={LONG_DESCRIPTION}
    header={LONG_HEADER}
    iconName={ICON_NAME}
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
    onPress={ON_PRESS}
    title={LONG_TITLE}
    value="Value"
  />,
  <ListItemValue
    description="List item with async on Press"
    header="Header"
    iconName={ICON_NAME}
    onPress={ASYNC_ON_PRESS}
    title="Title"
    value="Value"
  />,
  <ListItemValue
    description="List item with right option"
    header="Header"
    iconName={ICON_NAME}
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
    onPress={ON_PRESS}
    showDivider
    title="Title"
    value="Value"
  />,
  <ListItemValue
    description="List item with onPress and no header "
    iconName={ICON_NAME}
    showDivider
    onPress={ON_PRESS}
    title="Title"
    value="Value"
  />,
  <ListItemValue
    description="List item with right option and no header"
    iconName={ICON_NAME}
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
    showDivider
    onPress={ON_PRESS}
    title="Title"
    value="Value"
  />,
  <ListItemValue
    description="List item with right option and divider"
    header="Header"
    iconName={ICON_NAME}
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
    title="Title"
    value="Value"
  />,
];

export const ListItemValueSandbox = () => (
  <DocList docs={LIST_ITEMS} margin="md" />
);
