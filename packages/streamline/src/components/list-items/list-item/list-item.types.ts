import { IconsName } from '../../../primitives/icon/icon.types';

type RightOption = {
  accessibilityLabel: string;
  iconName: IconsName;
  onPress: () => unknown;
};

export type ListItemProps = {
  accessibilityLabel?: string;
  description?: string;
  header?: string;
  iconName?: IconsName;
  isSkeleton?: boolean;
  key?: React.Key;
  onLongPress?: () => unknown;
  onPress?: () => unknown;
  rightOption?: RightOption;
  showDivider?: boolean;
  title: string;
};
