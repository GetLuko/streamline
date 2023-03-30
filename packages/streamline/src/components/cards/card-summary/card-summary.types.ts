import { CardProps } from '../../../primitives/card/card.types';
import { IconsName } from '../../../primitives/icon/icon.types';
import { ColorTheme } from '../../../theme';
import { Appearance } from '../../../theme/appearance';

export type CardSummaryProps = Pick<CardProps, 'testID'> & {
  appearance?: Extract<Appearance, 'neutral' | 'bluko'>;
  iconName?: IconsName;
  rightAction?: 'navigate';
  value?: string;
  header?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
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
};

export type CardSummaryColors = {
  headerColors: HeaderColors;
  contentColors: ContentColors;
  containerColors: ContainerColors;
};
