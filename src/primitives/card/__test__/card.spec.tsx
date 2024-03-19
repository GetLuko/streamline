import React from 'react';

import { renderWithProvider } from '../../../testing/render-with-provider';
import { Card } from '../card';

describe('Card', () => {
  it('should render successfully', () => {
    const { root } = renderWithProvider(<Card />);
    expect(root).toBeTruthy();
  });
});
