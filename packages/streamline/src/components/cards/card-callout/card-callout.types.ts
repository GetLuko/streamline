import { CardProps } from '../../../primitives/card/card.types';
import { IconsName } from '../../../primitives/icon/icon.types';
import { ColorTheme } from '../../../theme';
import { Appearance } from '../../../theme/appearance';

export type CardCalloutProps = {
  appearance?: Appearance;
  description: string;
  isSkeleton?: boolean;
  numberOfSkeletonLines?: number;
} & Pick<HeaderProps, 'dismissAction' | 'header' | 'iconName'> &
  Pick<CardProps, 'onLongPress' | 'onPress' | 'onPressIn' | 'onPressOut'>;

export type HeaderProps = {
  colors: CardCalloutColors;
  dismissAction?: DismissAction;
  hasAction: boolean;
  header: string;
  iconName: IconsName;
};

export type DismissAction = {
  accessibilityLabel: string;
  onDismiss: () => unknown;
};

export type CardCalloutColors = {
  backgroundColor: ColorTheme;
  clickIconColor: ColorTheme;
  descriptionColor: ColorTheme;
  headerColor: ColorTheme;
  iconColor: ColorTheme;
  pressedColor: ColorTheme;
};
