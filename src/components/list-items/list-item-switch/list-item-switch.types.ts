import { SwitchProps } from '../../switch/switch';
import { ListItemProps } from '../list-item/list-item.types';

export type ListItemSwitchProps = Pick<
  ListItemProps,
  | 'accessibilityLabel'
  | 'description'
  | 'header'
  | 'iconName'
  | 'isSkeleton'
  | 'showDivider'
  | 'testID'
  | 'title'
> & {
  switchOption: SwitchProps;
};
