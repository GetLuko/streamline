import { Alert } from 'react-native';
import { ListItemGroup, ListItemProps } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const ICON_NAME = 'Area';
const DESCRIPTION = 'Description';
const ON_PRESS = () => Alert.alert('item pressed');

const ITEM: ListItemProps = {
  title: 'Item',
};

const ITEM_WITH_ICON: ListItemProps = {
  iconName: ICON_NAME,
  title: 'Item with icon',
};

const ITEM_WITH_ON_PRESS: ListItemProps = {
  title: 'Item with on press',
  onPress: ON_PRESS,
};

const ITEM_WITH_ICON_AND_ON_PRESS: ListItemProps = {
  iconName: ICON_NAME,
  title: 'Item with icon and on press',
  onPress: ON_PRESS,
};

const GROUPS = [
  <ListItemGroup
    title="One item"
    description="One item"
    items={[ITEM_WITH_ICON_AND_ON_PRESS]}
    key="One item"
  />,
  <ListItemGroup
    description="Two items with only description"
    items={[ITEM, ITEM]}
    key="Two items"
  />,
  <ListItemGroup
    title="Three items with only title"
    items={[ITEM_WITH_ICON, ITEM_WITH_ICON, ITEM_WITH_ICON]}
    key="Three items"
  />,
  <ListItemGroup
    items={[
      ITEM_WITH_ICON_AND_ON_PRESS,
      ITEM_WITH_ICON_AND_ON_PRESS,
      ITEM_WITH_ICON_AND_ON_PRESS,
      ITEM_WITH_ICON_AND_ON_PRESS,
    ]}
    key="Four items"
  />,
  <ListItemGroup
    title="Five items"
    description="Five items"
    items={[
      ITEM_WITH_ON_PRESS,
      ITEM_WITH_ON_PRESS,
      ITEM_WITH_ON_PRESS,
      ITEM_WITH_ON_PRESS,
      ITEM_WITH_ON_PRESS,
    ]}
    key="Five items"
  />,
];

export const ListItemGroupSandbox = () => <DocList docs={GROUPS} margin="md" />;
