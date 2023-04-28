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
  isSkeleton?: boolean;
  onLongPress?: () => unknown;
  onPress?: () => unknown;
  title: string;
  rightOption?: RightOption;
  isSelected?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

export type ListItemOptionProps =
  | (BaseProps & { type: 'radio' | 'checkbox'; iconName?: IconsName })
  | (BaseProps & { type: 'icon'; iconName: IconsName });
