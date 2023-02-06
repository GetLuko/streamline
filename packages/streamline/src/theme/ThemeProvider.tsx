import { ThemeProvider } from '@shopify/restyle';
import { theme } from '.';

type StreamlineThemeProviderProps = {
  children?: React.ReactNode;
};

export const StreamlineThemeProvider = (
  props: StreamlineThemeProviderProps
) => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
