import { IconsName } from '../../../primitives/icon/icon.types';
import { Appearance } from '../../../theme';

export type RightOption = {
  accessibilityLabel: string;
  iconName: IconsName;
  onPress: () => unknown;
  testID?: string;
};

export type ListItemProps = {
  appearance?: Extract<Appearance, 'neutral' | 'danger'>;
  accessibilityLabel?: string;
  description?: string;
  header?: string;
  iconName?: IconsName;
  isDisabled?: boolean;
  isSkeleton?: boolean;
  key?: React.Key;
  onLongPress?: () => unknown;
  onPress?: () => unknown;
  rightOption?: RightOption;
  showDivider?: boolean;
  testID?: string;
  title: string;
};
