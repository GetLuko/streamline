import React from 'react';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import CardTip from '../card-tip';

describe('CardTip', () => {
  it('should render successfully', () => {
    const { root } = renderWithProvider(
      <CardTip iconName="Area" description="Card Tip" />
    );
    expect(root).toBeTruthy();
  });

  it('should render successfully with appearance', () => {
    const { root } = renderWithProvider(
      <CardTip iconName="Area" description="Card Tip" appearance="warning" />
    );
    expect(root).toBeTruthy();
  });
});
