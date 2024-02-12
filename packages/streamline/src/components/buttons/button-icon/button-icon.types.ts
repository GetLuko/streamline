import { InteractionType } from '../../..';
import { GenericSize, IconsName } from '../../../primitives/icon/icon.types';
import { Appearance } from '../../../theme/appearance';

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
  size?: GenericSize;
  isSkeleton?: boolean;
  /**
   * if false, the spinner will not be display (e.g. BackButton)
   */
  shouldDisplaySpinner?: boolean;
}
