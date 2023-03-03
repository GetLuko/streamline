import React from 'react';

import { Card } from './card';
import { renderWithProvider } from '../../testing/render-with-provider';

describe('Card', () => {
  it('should render successfully', () => {
    const { container } = renderWithProvider(<Card />);
    expect(container).toBeTruthy();
  });
});
