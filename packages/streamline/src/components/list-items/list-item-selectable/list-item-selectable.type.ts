import { ListItemProps } from '../list-item/list-item.types';

export type ListItemSelectableProps = ListItemProps & {
  value: string;
  isSelected?: boolean;
};
