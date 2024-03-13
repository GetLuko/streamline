import React from 'react';

import { renderWithProvider } from '../../../testing/render-with-provider';
import { Box } from '../box';

describe('Box', () => {
  it('should render successfully', () => {
    const { UNSAFE_root } = renderWithProvider(<Box />);
    expect(UNSAFE_root).toBeTruthy();
  });
});
