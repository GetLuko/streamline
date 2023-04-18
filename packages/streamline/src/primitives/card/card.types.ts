import { PressableProps } from 'react-native';
import { ColorTheme } from '../../theme';
import { ShadowTheme } from '../../theme/shadows';
import { Box } from '../box/box';

export type CardProps = {
  /**
   * Card shadow.
   */
  shadows?: ShadowTheme;
  /**
   * enable the padding of the card
   */
  withPadding?: boolean;
  /**
   * enable the entering and exiting animation of the card
   */
  animated?: boolean;
  /**
   * The background color of the card when pressed.
   */
  pressedBackgroundColor?: ColorTheme;
  /**
   * The background color of the card.
   */
  backgroundColor?: ColorTheme;
} & Pick<
  PressableProps,
  | 'onLongPress'
  | 'onPress'
  | 'onPressIn'
  | 'onPressOut'
  | 'disabled'
  | 'testID'
  | 'accessible'
> &
  Omit<React.ComponentProps<typeof Box>, 'backgroundColor'>;
