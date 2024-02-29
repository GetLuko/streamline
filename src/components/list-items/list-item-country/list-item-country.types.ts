import { ListItemProps } from '../list-item/list-item.types';

export type ListItemCountryProps = Pick<
  ListItemProps,
  | 'appearance'
  | 'testID'
  | 'showDivider'
  | 'key'
  | 'accessibilityLabel'
  | 'onPress'
  | 'title'
  | 'isDisabled'
> & {
  countryCode: string;
};
