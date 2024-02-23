import { IconsName } from '../../../primitives/icon/icon.types';
import { Appearance } from '../../../theme';

type CommonOption = {
  accessibilityLabel: string;
  testID?: string;
};

type IconOption = CommonOption & {
  iconName: IconsName;
  onPress: () => unknown;
  type?: 'icon';
};

type TagOption = CommonOption & {
  appearance?: Appearance;
  iconName?: IconsName;
  text: string;
  type: 'tag';
};

export type RightOption = IconOption | TagOption;

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
