import React from 'react';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import CardTip from '../card-tip';

describe('CardTip', () => {
  it('should render successfully', () => {
    const { container } = renderWithProvider(
      <CardTip iconName="Area" description="Card Tip" />
    );
    expect(container).toBeTruthy();
  });

  it('should render successfully with appearance', () => {
    const { container } = renderWithProvider(
      <CardTip iconName="Area" description="Card Tip" appearance="warning" />
    );
    expect(container).toBeTruthy();
  });
});
