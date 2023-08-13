import React from 'react';
import { render } from '@testing-library/react-native';

import CardHighlight from './card-highlight';

describe('CardHighlight', () => {
  it('should render successfully', () => {
    const { container } = render(<CardHighlight />);
    expect(container).toBeTruthy();
  });
});
