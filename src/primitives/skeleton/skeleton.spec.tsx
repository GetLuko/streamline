import React from 'react';

import { Skeleton } from './skeleton';
import { renderWithProvider } from '../../testing/render-with-provider';

describe('Skeleton', () => {
  it('should render successfully', () => {
    const { UNSAFE_root } = renderWithProvider(<Skeleton />);
    expect(UNSAFE_root).toBeTruthy();
  });
});
