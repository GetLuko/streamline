import { PressableProps } from 'react-native';
import { SmallIconName } from '../../primitives/icon/icon.types';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'neutral'
  | 'disabled'
  | 'placeholder';

export type ButtonProps = {
  /**
   * The text to display. Upper first char automaticaly.
   */
  text?: string;
  /**
   * Whether the press behavior is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the button is loading.
   */
  isLoading?: boolean;
  /**
   * Whether the button is touched.
   */
  isTouched?: boolean;
  /**
   * The variant of the button. Can be one of `primary`, `secondary`, `danger`, `disabled` or `skeleton`.
   */
  variant?: ButtonVariant;
  /**
   * The type of the button. Can be one of `full` or `mini`.
   */
  type?: 'full' | 'mini';
  /**
   * The name of the icon to display. Button support only small icon. Button type "Full" don't support icon.
   */
  iconName?: SmallIconName;
  /**
   * The delay in ms before the onPress callback is called.
   */
  debounceDelay?: number;
} & Omit<PressableProps, 'children' | 'disabled' | 'style'>;
