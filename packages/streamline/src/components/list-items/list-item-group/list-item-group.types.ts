import { ListItemSelectableProps } from '../list-item-selectable/list-item-selectable.type';
import { ListItemValueProps } from '../list-item-value/list-item-value.types';
import { ListItemProps } from '../list-item/list-item.types';

export type ListItemGroupProps = {
  description?: string;
  items: (ListItemProps | ListItemValueProps | ListItemSelectableProps)[];
  title?: string;
};
