import React from 'react';

import { renderWithProvider } from '../../testing/render-with-provider';
import { AnimatedBox } from './animated-box';

describe('AnimatedBox', () => {
  it('should render successfully', () => {
    const { container } = renderWithProvider(<AnimatedBox />);
    expect(container).toBeTruthy();
  });
});
