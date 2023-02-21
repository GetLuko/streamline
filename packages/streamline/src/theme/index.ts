import { createTheme, useTheme } from '@shopify/restyle';

import { colors } from './colors';
import { radius } from './radius';
import { spacings } from './spacings';
import { fonts } from './fonts';
import { appearDuration, appearEntering, appearExiting, opacityDuration, onPressScale } from './animation';
export { fonts, TextVariants as TextVariant } from './fonts';

export const theme = createTheme({
  textVariants: fonts,
  colors: {
    ...colors.PRIMARY,
    ...colors.GREY,
    ...colors.PURPLE,
    ...colors.TEAL,
    ...colors.BLUKO,
    ...colors.ORANGE,
    ...colors.MINT,
    ...colors.GOLD,
    ...colors.TERRA,
  },
  spacing: spacings,
  breakpoints: {
    phone: 0,
  },
  borderRadii: radius,
  animation: {
    appearDuration,
    appearEntering,
    appearExiting,
    opacityDuration,
    onPressScale,
  },
});

export type ColorTheme = keyof Theme['colors'];
export type Theme = typeof theme;

export const useStreamlineTheme = () => useTheme<Theme>();
