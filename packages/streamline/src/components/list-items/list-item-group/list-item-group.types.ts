import { ListItemValueProps } from '../list-item-value/list-item-value.types';
import { ListItemProps } from '../list-item/list-item.types';

export type ListItemGroupProps = {
  description?: string;
  items: (ListItemProps | ListItemValueProps)[];
  title?: string;
};
