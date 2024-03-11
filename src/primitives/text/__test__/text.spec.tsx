import React from 'react';

import { Text } from '../text';
import { renderWithProvider } from '../../../testing/render-with-provider';

describe('Text', () => {
  it('should render successfully', () => {
    const { getByText } = renderWithProvider(<Text>{'Hello'}</Text>);
    expect(getByText('Hello')).toBeTruthy();
  });
});
