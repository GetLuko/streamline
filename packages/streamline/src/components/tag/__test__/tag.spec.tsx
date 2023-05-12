import React from 'react';

import { renderWithProvider } from '../../../testing/render-with-provider';
import Tag from '../tag';

describe('Tag', () => {
  it('should render successfully', () => {
    const { container } = renderWithProvider(
      <Tag iconName="Area" text="Tag" />
    );
    expect(container).toBeTruthy();
  });

  it('should render successfully when small', () => {
    const { container } = renderWithProvider(
      <Tag iconName="Area" isSmall text="Tag" />
    );
    expect(container).toBeTruthy();
  });
});
