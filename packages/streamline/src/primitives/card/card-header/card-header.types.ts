import { ColorTheme } from '../../../theme';
import { IconsName } from '../../icon/icon.types';

export type CardHeaderProps = {
  header?: string;
  iconName?: IconsName;
  rightAction?: 'navigate';
  value?: string;
  colors: Colors;
};

type Colors = {
  rightIconColor: ColorTheme;
  headerColor: ColorTheme;
  leftIconColor: ColorTheme;
  valueColor: ColorTheme;
};
