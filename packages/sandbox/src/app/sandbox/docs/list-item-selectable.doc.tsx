import { ListItemSelectable } from '@getluko/streamline';
import React from 'react';

import { DocList } from '../components/DocList';
import { sleep } from '../sandbox.utils';

const LONG_HEADER =
  'This is an unrealistically long header that will cause the text to wrap';
const LONG_TITLE = 'This is a long title that will wrap';
const LONG_DESCRIPTION =
  'This is an unrealistically long description that will wrap to the next line';
const LONG_VALUE = 'Value that pushes the title';
const ON_PRESS = () => console.log('item pressed');
const ASYNC_ON_PRESS = async () => sleep(2000);

const LIST_ITEMS: JSX.Element[] = [
  <ListItemSelectable
    onPress={ASYNC_ON_PRESS}
    isSelected
    description="Description"
    header="Header"
    title="Title"
    value="Value"
  />,
  <ListItemSelectable
    onPress={ASYNC_ON_PRESS}
    isSelected
    title="Title"
    value="Value"
    isDisabled
  />,
  <ListItemSelectable
    description="List item with on Press"
    header="Header"
    onPress={ASYNC_ON_PRESS}
    title="Title"
    value="Value"
  />,
  <ListItemSelectable
    description="List item disabled"
    header="Header"
    isDisabled
    onPress={ASYNC_ON_PRESS}
    title="Title"
    value="Value"
  />,
  <ListItemSelectable
    onPress={ASYNC_ON_PRESS}
    title={LONG_TITLE}
    value={LONG_VALUE}
  />,
  <ListItemSelectable
    description={LONG_DESCRIPTION}
    header={LONG_HEADER}
    isSelected
    onPress={ON_PRESS}
    rightOption={{
      accessibilityLabel: 'Test',
      iconName: 'Info',
      onPress: ASYNC_ON_PRESS,
    }}
    title={LONG_TITLE}
    value={`${LONG_VALUE} but ends up wrapping`}
    isDisabled
  />,
  <ListItemSelectable
    description={LONG_DESCRIPTION}
    header={LONG_HEADER}
    isSelected
    onPress={ON_PRESS}
    title={LONG_TITLE}
    value="Value"
  />,
  <ListItemSelectable
    description="List item with async on Press"
    header="Header"
    isSelected
    onPress={ASYNC_ON_PRESS}
    title="Title"
    value="Value"
  />,
  <ListItemSelectable
    description="List item with right option"
    header="Header"
    isSelected
    onPress={ON_PRESS}
    rightOption={{
      accessibilityLabel: 'Test',
      iconName: 'Info',
      onPress: ASYNC_ON_PRESS,
    }}
    title="Title"
    value="Value"
  />,
  <ListItemSelectable
    description="List item with divider"
    header="Header"
    isSelected
    onPress={ON_PRESS}
    showDivider
    title="Title"
    value="Value"
  />,
  <ListItemSelectable
    description="List item with onPress and no header "
    isSelected
    showDivider
    onPress={ON_PRESS}
    title="Title"
    value="Value"
  />,
  <ListItemSelectable
    description="List item with right option and no header"
    isSelected
    showDivider
    rightOption={{
      accessibilityLabel: 'Test',
      iconName: 'Info',
      onPress: ASYNC_ON_PRESS,
    }}
    title="Title"
    value="Value"
  />,
  <ListItemSelectable
    description="List item with divider and no icon"
    showDivider
    onPress={ON_PRESS}
    title="Title"
    value="Value"
  />,
  <ListItemSelectable
    description="List item with right option and divider"
    header="Header"
    isSelected
    onPress={ON_PRESS}
    rightOption={{
      accessibilityLabel: 'Test',
      iconName: 'Info',
      onPress: ASYNC_ON_PRESS,
    }}
    showDivider
    title="Title"
    value="Value"
    appearance="danger"
  />,
  <ListItemSelectable
    description="List item with right option and divider"
    header="Header"
    isSelected
    onPress={ON_PRESS}
    rightOption={{
      accessibilityLabel: 'Test',
      iconName: 'Info',
      onPress: ASYNC_ON_PRESS,
    }}
    showDivider
    title="Title"
    value="Value"
    appearance="danger"
    isDisabled
  />,
  <ListItemSelectable
    description="Skeleton list item"
    header="Header"
    isSelected
    isSkeleton
    title="Title"
    value="Value"
  />,
];

export const ListItemSelectableSandbox = () => (
  <DocList docs={LIST_ITEMS} margin="md" />
);

export default ListItemSelectableSandbox;
