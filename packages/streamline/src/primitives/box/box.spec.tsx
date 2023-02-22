import React from 'react';

import { Box } from './box';
import { renderWithProvider } from '../../testing/render-with-provider';

describe('Box', () => {
  it('should render successfully', () => {
    const { container } = renderWithProvider(<Box />);
    expect(container).toBeTruthy();
  });
});
