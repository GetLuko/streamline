import { InteractionType } from '../../../';
import { PressableProps } from 'react-native';
import { SmallIconName } from '../../../primitives/icon/icon.types';
import { Appearance } from '../../../theme/appearance';

export type ButtonProps = Omit<InteractionType, 'accessibilityLabel'> & {
  /**
   * The text to display. Upper first char automaticaly.
   */
  text: string;
  /**
   * Whether the button is touched.
   */
  isTouched?: boolean;
  /**
   * The variant of the button. Can be one of `primary`, `secondary`, `danger`, `neutral` or `placeholder`.
   */
  appearance?: Appearance;
  /**
   * The type of the button. Can be one of `full` or `mini`.
   */
  size?: 'full' | 'mini';
  /**
   * The name of the icon to display. Button support only small icon. Button type "Full" don't support icon.
   */
  iconName?: SmallIconName;
  /**
   * The delay in ms before the onPress callback is called.
   */
  debounceDelay?: number;
  /**
   * Display as a Placeholder.
   */
  isPlaceholder?: boolean;
} & Omit<PressableProps, 'children' | 'disabled' | 'style'>;
