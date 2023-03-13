import { Appearance } from '../../../theme/appearance';
import { IconsName, Size } from '../../../primitives/icon/icon.types';
import { InteractionType } from '../../../';

export interface ButtonIconProps extends InteractionType {
  /**
   * Name of the icon to display
   */
  iconName: IconsName;
  /**
   * Appearance of the button
   */
  appearance?: Appearance;
  /**
   * If true, the button will be wrapped in a container
   */
  withContainer?: boolean;
  /**
   * Size of the button
   */
  size?: Size;
}
