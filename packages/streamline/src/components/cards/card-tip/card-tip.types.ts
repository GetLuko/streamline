import { IconsName } from '../../../primitives/icon/icon.types';
import { ColorTheme } from '../../../theme';
import { Appearance } from '../../../theme/appearance';

export type CardTipProps = {
  appearance?: Appearance;
  description: string;
  iconName: IconsName;
};

export type CardTipColors = {
  backgroundColor: ColorTheme;
  descriptionColor: ColorTheme;
  iconColor: ColorTheme;
};
