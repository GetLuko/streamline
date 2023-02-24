import React from 'react';
import { render } from '@testing-library/react-native';

import Card from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { container } = render(<Card />);
    expect(container).toBeTruthy();
  });
});
