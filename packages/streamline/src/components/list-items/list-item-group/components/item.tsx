import React from 'react';

import ListItemSelectable from '../../list-item-selectable/list-item-selectable';
import { ListItemSelectableProps } from '../../list-item-selectable/list-item-selectable.type';
import ListItemValue from '../../list-item-value/list-item-value';
import { ListItemValueProps } from '../../list-item-value/list-item-value.types';
import ListItem from '../../list-item/list-item';
import { ListItemProps } from '../../list-item/list-item.types';
import {
  isListItemSelectable,
  isListItemValueProps,
} from '../list-item-group.utils';

export const Item = (
  props: ListItemProps | ListItemValueProps | ListItemSelectableProps
) => {
  if (isListItemValueProps(props)) return <ListItemValue {...props} />;

  if (isListItemSelectable(props)) return <ListItemSelectable {...props} />;

  return <ListItem {...props} />;
};
