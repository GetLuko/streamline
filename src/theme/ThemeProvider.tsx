import { ThemeProvider } from '@shopify/restyle';

import AnimationContextProvider from '../contexts/disable-animation.context';

import { disabledAnimationTheme, theme } from '.';

type StreamlineThemeProviderProps = {
  children?: React.ReactNode;
  /**
   * Disable all animations for testing purposes
   */
  disableAnimation?: boolean;
};

export const StreamlineThemeProvider = ({
  children,
  disableAnimation = false,
}: StreamlineThemeProviderProps) => (
  <AnimationContextProvider disableAnimation={disableAnimation}>
    <ThemeProvider theme={disableAnimation ? disabledAnimationTheme : theme}>
      {children}
    </ThemeProvider>
  </AnimationContextProvider>
);
