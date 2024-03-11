import React from 'react';

import { AnimatedBox } from '../animated-box';
import { renderWithProvider } from '../../../testing/render-with-provider';

describe('AnimatedBox', () => {
  it('should render successfully', () => {
    const { UNSAFE_root } = renderWithProvider(<AnimatedBox />);
    expect(UNSAFE_root).toBeTruthy();
  });
});
