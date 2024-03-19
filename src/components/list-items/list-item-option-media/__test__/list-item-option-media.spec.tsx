import { act, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import { ListItemOptionMedia } from '../list-item-option-media';

describe('ListItemOptionMedia', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onPress when pressed', async () => {
    // Given
    const onPress = jest.fn();
    const { getByText } = renderWithProvider(
      <ListItemOptionMedia iconName="Area" title="Title" onPress={onPress} />
    );

    // When
    await act(async () => {
      fireEvent.press(getByText('Title'));
    });

    // Then
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should not call onPress when disabled', async () => {
    // Given
    const onPress = jest.fn();
    const { getByText } = renderWithProvider(
      <ListItemOptionMedia
        iconName="Area"
        title="Title"
        onPress={onPress}
        isDisabled
      />
    );

    // When
    await act(async () => {
      fireEvent.press(getByText('Title'));
    });

    // Then
    expect(onPress).not.toHaveBeenCalled();
  });
});
