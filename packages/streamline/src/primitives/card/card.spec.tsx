import React from 'react';

import { renderWithProvider } from '../../testing/render-with-provider';
import { Card } from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { container } = renderWithProvider(<Card />);
    expect(container).toBeTruthy();
  });
});
