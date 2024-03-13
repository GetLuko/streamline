import React from 'react';

import { renderWithProvider } from '../../../testing/render-with-provider';
import { Skeleton } from '../skeleton';

describe('Skeleton', () => {
  it('should render successfully', () => {
    const { UNSAFE_root } = renderWithProvider(<Skeleton />);
    expect(UNSAFE_root).toBeTruthy();
  });
});
