import React from 'react';

import { renderWithProvider } from '../../../testing/render-with-provider';
import Tag from '../tag';

describe('Tag', () => {
  it('should render successfully', () => {
    const { UNSAFE_root } = renderWithProvider(
      <Tag iconName="Area" text="Tag" />,
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it('should render successfully when small', () => {
    const { UNSAFE_root } = renderWithProvider(
      <Tag iconName="Area" isSmall text="Tag" />,
    );
    expect(UNSAFE_root).toBeTruthy();
  });
});
