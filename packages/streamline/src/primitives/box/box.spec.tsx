import React from 'react';
import { render } from '@testing-library/react-native';

import { Box } from './box';
import { StreamlineThemeProvider } from '../../theme/ThemeProvider';

describe('Box', () => {
  it('should render successfully', () => {
    const { container } = render(
      <StreamlineThemeProvider>
        <Box />
      </StreamlineThemeProvider>
    );
    expect(container).toBeTruthy();
  });
});
