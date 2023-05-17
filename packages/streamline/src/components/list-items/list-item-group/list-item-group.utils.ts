import { ListItemValueProps } from '../list-item-value/list-item-value.types';
import { ListItemProps } from '../list-item/list-item.types';

export const isListItemValueProps = (
  item: ListItemProps
): item is ListItemValueProps => 'value' in item;
