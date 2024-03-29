import React from 'react';

import { renderWithProvider } from '../../../testing/render-with-provider';
import { Box } from '../box';

describe('Box', () => {
  it('should render successfully', () => {
    const { root } = renderWithProvider(<Box />);
    expect(root).toBeTruthy();
  });
});
