import React from 'react';

import CardSummary from './card-summary';
import { renderWithProvider } from '../../../testing/render-with-provider';

describe('CardSummary', () => {
  it('should render successfully', () => {
    const { UNSAFE_root } = renderWithProvider(
      <CardSummary
        appearance="neutral"
        header="Header"
        value="Value"
        iconName="Area"
        rightAction="navigate"
      />,
    );
    expect(UNSAFE_root).toBeTruthy();
  });
});
