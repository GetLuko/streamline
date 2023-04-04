import { ColorTheme } from '../../theme';
import { ShadowTheme } from '../../theme/shadows';
import { Box } from '../box/box';

export type CardProps = {
  onLongPress?: () => void;
  onPress?: (event: unknown) => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  disabled?: boolean;
  shadows?: ShadowTheme;
  withPadding?: boolean;
  animated?: boolean;
  pressedBackgroundColor?: ColorTheme;
  backgroundColor?: ColorTheme;
} & Omit<React.ComponentProps<typeof Box>, 'backgroundColor'>;
