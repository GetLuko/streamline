import { IconsName } from '../../primitives/icon/icon.types';
import { Appearance } from '../../theme/appearance';

export type TagProps = {
  accessibilityLabel?: string;
  appearance?: Appearance;
  iconName?: IconsName;
  isSmall?: boolean;
  text?: string;
};
