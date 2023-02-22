import React from 'react';

import { AnimatedBox } from './animated-box';
import { renderWithProvider } from '../../testing/render-with-provider';

describe('AnimatedBox', () => {
  it('should render successfully', () => {
    const { container } = renderWithProvider(<AnimatedBox />);
    expect(container).toBeTruthy();
  });
});
