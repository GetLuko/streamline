import React from 'react';
import { render } from '@testing-library/react-native';
import { StreamlineThemeProvider } from '../../theme/ThemeProvider';
import { Text } from './text';

describe('Text', () => {
  it('should render successfully', () => {
    const { getByText } = render(
      <StreamlineThemeProvider>
        <Text>Hello</Text>
      </StreamlineThemeProvider>
    );
    expect(getByText('Hello')).toBeTruthy();
  });
});
