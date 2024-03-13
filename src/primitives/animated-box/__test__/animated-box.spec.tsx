import React from 'react';

import { renderWithProvider } from '../../../testing/render-with-provider';
import { AnimatedBox } from '../animated-box';

describe('AnimatedBox', () => {
  it('should render successfully', () => {
    const { UNSAFE_root } = renderWithProvider(<AnimatedBox />);
    expect(UNSAFE_root).toBeTruthy();
  });
});
