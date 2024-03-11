import React from 'react';

import { Box } from '../box';
import { renderWithProvider } from '../../../testing/render-with-provider';

describe('Box', () => {
  it('should render successfully', () => {
    const { UNSAFE_root } = renderWithProvider(<Box />);
    expect(UNSAFE_root).toBeTruthy();
  });
});
