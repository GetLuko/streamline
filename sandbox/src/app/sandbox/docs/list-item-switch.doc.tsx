import { ListItemSwitch } from '@getluko/streamline';
import React, { useState } from 'react';

import { DocList } from '../components/DocList';

const ICON_NAME = 'Area';
const LONG_HEADER =
  'This is an unrealistically long header that will cause the text to wrap';
const LONG_TITLE = 'This is a long title that will wrap';
const LONG_DESCRIPTION =
  'This is an unrealistically long description that will wrap to the next line';

export const ListItemSwitchSandbox = () => {
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const [value4, setValue4] = useState(false);
  const [value5, setValue5] = useState(false);

  const LIST_ITEMS: JSX.Element[] = [
    <ListItemSwitch
      description="Description"
      iconName={ICON_NAME}
      title="Default No Divider"
      switchOption={{
        value: value1,
        onChange: setValue1,
      }}
    />,
    <ListItemSwitch
      description="Description"
      header="Header"
      iconName={ICON_NAME}
      title="Default No Divider"
      switchOption={{
        value: value2,
        onChange: setValue2,
      }}
    />,
    <ListItemSwitch
      description={LONG_DESCRIPTION}
      header={LONG_HEADER}
      iconName={ICON_NAME}
      title={LONG_TITLE}
      switchOption={{
        value: value3,
        onChange: setValue3,
      }}
    />,
    <ListItemSwitch
      description="Description"
      iconName={ICON_NAME}
      title="Default Divider"
      switchOption={{
        value: value4,
        onChange: setValue4,
      }}
      showDivider
    />,
    <ListItemSwitch
      description="Description"
      header="Header"
      iconName={ICON_NAME}
      title="Default Divider"
      switchOption={{
        value: value5,
        onChange: setValue5,
      }}
      showDivider
    />,
    <ListItemSwitch
      description="Description"
      iconName={ICON_NAME}
      title="Default No Divider"
      switchOption={{
        value: value5,
        onChange: setValue5,
      }}
      isSkeleton
    />,
  ];

  return <DocList docs={LIST_ITEMS} margin="md" />;
};
