import { render } from '@testing-library/react-native';
import { ReactElement } from 'react';

import { StreamlineThemeProvider } from '../theme/ThemeProvider';

export const renderWithProvider = (component: ReactElement) => {
  return render(<StreamlineThemeProvider>{component}</StreamlineThemeProvider>);
};
