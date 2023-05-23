import React from 'react';

import ListItemValue from '../../list-item-value/list-item-value';
import { ListItemValueProps } from '../../list-item-value/list-item-value.types';
import ListItem from '../../list-item/list-item';
import { ListItemProps } from '../../list-item/list-item.types';
import { isListItemValueProps } from '../list-item-group.utils';

export const Item = (props: ListItemProps | ListItemValueProps) => {
  if (isListItemValueProps(props)) {
    return <ListItemValue {...props} />;
  }
  return <ListItem {...props} />;
};
