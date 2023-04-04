import { CardProps } from '../../../primitives/card/card.types';
import { IconsName } from '../../../primitives/icon/icon.types';
import { ColorTheme } from '../../../theme';
import { Appearance } from '../../../theme/appearance';
import { ButtonProps } from '../../buttons/button/button.types';

export type CardSummaryProps = Pick<
  CardProps,
  'accessibilityLabel' | 'testID' | 'onPress' | 'onPressIn' | 'onPressOut'
> & {
  appearance?: Extract<
    Appearance,
    'neutral' | 'primary' | 'warning' | 'danger'
  >;
  iconName?: IconsName;
  rightAction?: 'navigate';
  value?: string;
  header?: string;
  title?: string;
  description?: string;
  isLoading?: boolean;
  isSkeleton?: boolean;
  buttonProps?: Omit<ButtonProps, 'appearance' | 'pointerEvents'>;
};

type HeaderColors = {
  rightIconColor: ColorTheme;
  headerColor: ColorTheme;
  leftIconColor: ColorTheme;
  valueColor: ColorTheme;
};

type ContentColors = {
  titleColor: ColorTheme;
  descriptionColor: ColorTheme;
};

type ContainerColors = {
  backgroundColor: ColorTheme;
  pressBackgroundColor: ColorTheme;
};

export type CardSummaryColors = {
  headerColors: HeaderColors;
  contentColors: ContentColors;
  containerColors: ContainerColors;
};
