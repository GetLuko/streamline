import React from 'react';

import { Card } from '../card';
import { renderWithProvider } from '../../../testing/render-with-provider';

describe('Card', () => {
  it('should render successfully', () => {
    const { UNSAFE_root } = renderWithProvider(<Card />);
    expect(UNSAFE_root).toBeTruthy();
  });
});
