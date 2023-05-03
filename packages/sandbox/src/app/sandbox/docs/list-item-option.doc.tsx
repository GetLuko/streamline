import React from 'react';

import { ListItemOption } from '@getluko/streamline';
import { DocList } from '../components/DocList';
import { sleep } from '../sandbox.utils';
import { Alert } from 'react-native';

const ASYNC_ON_PRESS = async () => {
  await sleep(2000);
  Alert.alert('async pressed completed');
};

const LIST_ITEMS: JSX.Element[] = [
  <ListItemOption
    type="icon"
    iconName="Area"
    description="Description"
    header="Header"
    title="Skeleton"
    isSkeleton
    onPress={ASYNC_ON_PRESS}
  />,
  <ListItemOption
    type="icon"
    iconName="Area"
    description="Click to see touch state"
    header="Header"
    title="Icon Default"
    onPress={ASYNC_ON_PRESS}
  />,
  <ListItemOption
    type="icon"
    iconName="Area"
    description="Click to see touch state"
    header="Header"
    title="Icon Selected Default"
    onPress={ASYNC_ON_PRESS}
    isSelected
  />,
  <ListItemOption
    type="icon"
    iconName="Area"
    description="Description"
    header="Header"
    title="Icon Disabled"
    isDisabled
    onPress={ASYNC_ON_PRESS}
  />,
  <ListItemOption
    type="checkbox"
    description="Click to see touch state"
    header="Header"
    title="Checkbox Default"
    onPress={ASYNC_ON_PRESS}
  />,
  <ListItemOption
    type="checkbox"
    description="Click to see touch state"
    header="Header"
    title="Checkbox Selected Default"
    isSelected
    onPress={ASYNC_ON_PRESS}
  />,
  <ListItemOption
    type="checkbox"
    description="Description"
    header="Header"
    title="Checkbox Disabled"
    isDisabled
    onPress={ASYNC_ON_PRESS}
  />,
  <ListItemOption
    type="radio"
    description="Click to see touch state"
    header="Header"
    title="Radio Default"
    onPress={ASYNC_ON_PRESS}
  />,
  <ListItemOption
    type="radio"
    description="Click to see touch state"
    header="Header"
    title="Radio Selected Default"
    isSelected
    onPress={ASYNC_ON_PRESS}
  />,
  <ListItemOption
    type="radio"
    description="Description"
    header="Header"
    title="Radio Disabled"
    isDisabled
    onPress={ASYNC_ON_PRESS}
  />,
];

export const ListItemOptionSandbox = () => (
  <DocList docs={LIST_ITEMS} margin="md" />
);
