import { createTheme, useTheme } from '@shopify/restyle';

import { getAnimationValues } from './animation';
import { colors } from './colors';
import { fonts } from './fonts';
import { radius } from './radius';
import { spacings } from './spacings';

export { getShadowsStyle } from './shadows';
export { Appearance } from './appearance';
export { fonts, TextVariants as TextVariant } from './fonts';

export const baseTheme = {
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
  animation: getAnimationValues(false),
};

export const disabledAnimationTheme = createTheme({
  ...baseTheme,
  animation: getAnimationValues(true),
});

export const theme = createTheme(baseTheme);

export type Colors = Theme['colors'];
export type ColorTheme = keyof Colors;
export type Theme = typeof theme;

export const useStreamlineTheme = () => useTheme<Theme>();
