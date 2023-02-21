import React from 'react';
import { render } from '@testing-library/react-native';

import { AnimatedBox } from './animated-box';
import { StreamlineThemeProvider } from '../../theme/ThemeProvider';

describe('AnimatedBox', () => {
  it('should render successfully', () => {
    const { container } = render(
      <StreamlineThemeProvider>
        <AnimatedBox />
      </StreamlineThemeProvider>
    );
    expect(container).toBeTruthy();
  });
});
