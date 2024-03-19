import { IconsName } from '../../../types';
import { ListItemOptionProps } from '../list-item-option/list-item-option.types';

export type ListItemOptionMediaProps = Pick<
  ListItemOptionProps,
  | 'accessibilityLabel'
  | 'onLongPress'
  | 'onPress'
  | 'title'
  | 'isDisabled'
  | 'isSelected'
  | 'isSkeleton'
> & {
  iconName: IconsName;
};
