import React from 'react';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import CardSummary from '../card-summary';

describe('CardSummary', () => {
  it('should render successfully', () => {
    const { root } = renderWithProvider(
      <CardSummary
        appearance="neutral"
        header="Header"
        value="Value"
        iconName="Area"
        rightAction="navigate"
      />
    );
    expect(root).toBeTruthy();
  });
});
