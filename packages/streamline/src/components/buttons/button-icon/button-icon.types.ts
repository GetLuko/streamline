import { Appearance } from '../../../theme/appearance';
import { IconsName, Size } from '../../../primitives/icon/icon.types';

export interface ButtonIconProps {
  /**
   * TestID for the button
   */
  testID?: string;
  /**
   * Accessibility label for the button
   */
  accessibilityLabel: string;
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
   * Callback when pressed
   */
  onPress?: () => void;
  /**
   * Size of the button
   */
  size?: Size;
  /**
   * If true, the button state will be set to loading
   */
  isLoading?: boolean;
  /**
   * If true, the button will be disabled
   */
  isDisabled?: boolean;
}
