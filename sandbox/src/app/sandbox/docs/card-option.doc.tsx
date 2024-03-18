import { CardOption } from '@getluko/streamline';
import React, { useState } from 'react';

import { DocList } from '../components/DocList';
import { sleep } from '../sandbox.utils';

const ICON_NAME = 'Area';

const ON_PRESS = async () => {
  await sleep(2000);
  console.log('onPress pressed');
};

export const CardOptionSandbox = () => {
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(true);

  const CARDS: JSX.Element[] = [
    <CardOption
      header="Header"
      value="Value"
      title="Deselected"
      iconName={ICON_NAME}
      key="Delesected"
      description="Description"
      onPress={ON_PRESS}
      switchOption={{
        label: 'Switch Value',
        value: value1,
        onChange: setValue1,
      }}
    />,
    <CardOption
      header="Header"
      title="Selected"
      iconName={ICON_NAME}
      key="Selected"
      description="Description"
      onPress={ON_PRESS}
      switchOption={{
        label: 'Switch Value',
        value: value2,
        onChange: setValue2,
      }}
    />,
    <CardOption
      title="Minimal"
      iconName={ICON_NAME}
      key="Minimal"
      switchOption={{
        label: 'Switch Value',
        value: value1,
        onChange: setValue1,
      }}
    />,
    <CardOption
      title="Right option"
      iconName={ICON_NAME}
      key="Right option"
      header="Header"
      rightOption={{
        accessibilityLabel: 'Right option',
        iconName: 'Info',
        onPress: ON_PRESS,
      }}
      onPress={ON_PRESS}
      switchOption={{
        label: 'Switch Value',
        value: value2,
        onChange: setValue2,
      }}
    />,
    <CardOption
      header="Header"
      value="Value"
      title="Loading switch label"
      iconName={ICON_NAME}
      key="Loading switch label"
      description="Description"
      onPress={ON_PRESS}
      switchOption={{
        label: 'Switch Value',
        value: value1,
        onChange: setValue1,
        isLoadingLabel: true,
      }}
    />,
    <CardOption
      isLoading
      header="Header"
      title="Is Loading"
      iconName={ICON_NAME}
      key="Is Loading"
      description="Description"
      onPress={ON_PRESS}
      switchOption={{
        label: 'Switch Value',
        value: value2,
        onChange: setValue2,
      }}
    />,
    <CardOption
      isSkeleton
      header="Header"
      value="Value"
      title="Selected"
      iconName={ICON_NAME}
      key="Skeleton"
      description="Description"
      onPress={ON_PRESS}
      switchOption={{
        label: 'Switch Value',
        value: value1,
        onChange: setValue1,
      }}
    />,
  ];

  return <DocList docs={CARDS} margin="md" />;
};
