import React from 'react';

import { renderWithProvider } from '../../../testing/render-with-provider';
import { Skeleton } from '../skeleton';

describe('Skeleton', () => {
  it('should render successfully', () => {
    const { root } = renderWithProvider(<Skeleton />);
    expect(root).toBeTruthy();
  });
});
