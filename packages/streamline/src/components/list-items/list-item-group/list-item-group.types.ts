import { ListItemProps } from '../list-item/list-item.types';

export type ListItemGroupProps = {
  description?: string;
  items: ListItemProps[];
  title?: string;
};
