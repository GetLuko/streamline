import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import { TabBar } from '../tab-bar';

describe('TabBar', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onTabSelected when selected', () => {
    // Given
    const onTabSelected = jest.fn();
    const { getByText } = renderWithProvider(
      <TabBar
        tabs={['Tab 1', 'Tab 2']}
        tabIndex={0}
        onTabSelected={onTabSelected}
      />
    );

    // When
    fireEvent.press(getByText('Tab 2'));

    // Then
    expect(onTabSelected).toHaveBeenCalledTimes(1);
    expect(onTabSelected).toHaveBeenCalledWith(1);
  });
});
