import { ThemeProvider } from '@shopify/restyle';
import { theme } from '.';
import AnimationContextProvider from '../contexts/disable-animation.context';

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
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </AnimationContextProvider>
);
