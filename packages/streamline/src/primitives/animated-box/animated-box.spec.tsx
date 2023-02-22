import React from 'react';
import { render } from '@testing-library/react-native';

import { AnimatedBox } from './animated-box';
import { renderWithProvider } from '../../utils/render-with-provider';

describe('AnimatedBox', () => {
  it('should render successfully', () => {
    const { container } = renderWithProvider(<AnimatedBox />);
    expect(container).toBeTruthy();
  });
});
