import { render } from '@testing-library/react-native';
import { ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StreamlineThemeProvider } from '../theme/ThemeProvider';

export const renderWithProvider = (component: ReactElement) => {
  return render(
    <SafeAreaProvider>
      <StreamlineThemeProvider>{component}</StreamlineThemeProvider>
    </SafeAreaProvider>
  );
};
