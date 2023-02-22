import React from 'react';
import { render } from '@testing-library/react-native';

import Spinner from './spinner';

describe('Spinner', () => {
  it('should render successfully', () => {
    const { container } = render(<Spinner />);
    expect(container).toBeTruthy();
  });
});
