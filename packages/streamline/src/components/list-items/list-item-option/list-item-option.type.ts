import { IconsName } from '../../../primitives/icon/icon.types';

export interface BaseProps {
  accessibilityLabel?: string;
  description?: string;
  header?: string;
  isSkeleton?: boolean;
  onLongPress?: () => unknown;
  onPress?: () => unknown;
  title: string;
  showInfoButton?: boolean;
  onInfoButtonPress?: () => void;
  isSelected?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

export type ListItemOptionProps =
  | (BaseProps & { type: 'radio' | 'checkbox'; iconName?: IconsName })
  | (BaseProps & { type: 'icon'; iconName: IconsName });
