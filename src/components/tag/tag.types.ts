import { IconsName } from '../../primitives/icon/icon.types';
import { Appearance } from '../../theme/appearance';

export type TagProps = {
  appearance?: Appearance;
  iconName?: IconsName;
  isSmall?: boolean;
  text?: string;
};
