import { ListItemOptionMedia } from '@getluko/streamline';
import React, { useState } from 'react';

import { DocList } from '../components/DocList';
import { sleep } from '../sandbox.utils';

export const ListItemOptionMediaSandbox = () => {
  const [selected0, setSelected0] = useState(false);
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(false);

  const onAsyncPress = async () => {
    await sleep(2000);
    setSelected2((prev) => !prev);
  };

  const LIST_ITEMS: JSX.Element[] = [
    <ListItemOptionMedia
      iconName="Area"
      title="Option"
      onPress={() => setSelected0((prev) => !prev)}
      isSelected={selected0}
    />,
    <ListItemOptionMedia
      iconName="Area"
      title="Sync change"
      onPress={() => setSelected1((prev) => !prev)}
      isSelected={selected1}
    />,
    <ListItemOptionMedia
      iconName="Area"
      title="Async change"
      onPress={onAsyncPress}
      isSelected={selected2}
    />,
    <ListItemOptionMedia
      iconName="Area"
      isDisabled
      title="Disabled"
      onPress={onAsyncPress}
      isSelected={false}
    />,
    <ListItemOptionMedia
      iconName="Area"
      isSkeleton
      title="Skeleton"
      onPress={onAsyncPress}
      isSelected={selected2}
    />,
  ];

  return <DocList docs={LIST_ITEMS} margin="md" />;
};
