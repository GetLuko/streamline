import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import { Tab } from '../tab';

describe('Tab', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onPress when pressed', () => {
    // Given
    const onPress = jest.fn();
    const { getByText } = renderWithProvider(
      <Tab title="Title" onPress={onPress} />
    );

    // When
    fireEvent.press(getByText('Title'));
    fireEvent.press(getByText('Title'));

    // Then
    expect(onPress).toHaveBeenCalledTimes(2);
  });
});
