import React from 'react';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import CardTip from '../card-tip';

describe('CardTip', () => {
  it('should render successfully', () => {
    const { UNSAFE_root } = renderWithProvider(
      <CardTip iconName="Area" description="Card Tip" />,
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it('should render successfully with appearance', () => {
    const { UNSAFE_root } = renderWithProvider(
      <CardTip iconName="Area" description="Card Tip" appearance="warning" />,
    );
    expect(UNSAFE_root).toBeTruthy();
  });
});
