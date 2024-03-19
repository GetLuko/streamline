import React from 'react';

import { renderWithProvider } from '../../../testing/render-with-provider';
import Tag from '../tag';

describe('Tag', () => {
  it('should render successfully', () => {
    const { root } = renderWithProvider(<Tag iconName="Area" text="Tag" />);
    expect(root).toBeTruthy();
  });

  it('should render successfully when small', () => {
    const { root } = renderWithProvider(
      <Tag iconName="Area" isSmall text="Tag" />
    );
    expect(root).toBeTruthy();
  });
});
