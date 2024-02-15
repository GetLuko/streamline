import { IconsName } from '../../../primitives/icon/icon.types';

type RightOption = {
  accessibilityLabel: string;
  iconName: IconsName;
  onPress: () => unknown;
};

export interface BaseProps {
  accessibilityLabel?: string;
  description?: string;
  header?: string;
  onLongPress?: () => unknown;
  onPress?: () => unknown;
  title: string;
  rightOption?: RightOption;
  isSkeleton?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;
}

export type ListItemOptionProps =
  | (BaseProps & { type: 'radio' | 'checkbox'; iconName?: IconsName })
  | (BaseProps & { type: 'icon'; iconName: IconsName });
