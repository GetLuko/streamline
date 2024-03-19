import { render } from '@testing-library/react-native';
import React from 'react';

import Spinner from '../spinner';

describe('Spinner', () => {
  it('should render successfully', () => {
    const { root } = render(<Spinner />);
    expect(root).toBeTruthy();
  });
});
