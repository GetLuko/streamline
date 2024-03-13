import React from 'react';

import { renderWithProvider } from '../../../testing/render-with-provider';
import { Text } from '../text';

describe('Text', () => {
  it('should render successfully', () => {
    const { getByText } = renderWithProvider(<Text>{'Hello'}</Text>);
    expect(getByText('Hello')).toBeTruthy();
  });
});
