import React from 'react';

import { Markdown } from './markdown';
import { renderWithProvider } from '../../testing/render-with-provider';

const md = `Descriptive [link](https://www.luko.eu)`;

describe('Markdown Link', () => {
  it('should render successfully', () => {
    // WHen
    const { getByText } = renderWithProvider(<Markdown>{md}</Markdown>);
    // Then
    expect(getByText('Descriptive link')).toBeTruthy();
  });
});
