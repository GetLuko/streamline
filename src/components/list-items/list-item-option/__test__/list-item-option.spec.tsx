import { fireEvent, waitFor } from '@testing-library/react-native';
import React from 'react';

import ListItemOption from '../list-item-option';
import { renderWithProvider } from '../../../../testing/render-with-provider';

describe('ListItemOption', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onPress when pressed', async () => {
    // Given
    const onPress = jest.fn();
    const { getByText } = renderWithProvider(
      <ListItemOption
        description="Description"
        header="Header"
        iconName="Area"
        title="Title"
        onPress={onPress}
        type="checkbox"
      />
    );

    // When
    fireEvent.press(getByText('Header'));

    // Then
    await waitFor(() => expect(onPress).toHaveBeenCalledTimes(1));
  });

  it('should callconPress when item pressed', async () => {
    // Given
    const onPress = jest.fn();
    const accessibilityLabel = 'List item option';
    const { getByLabelText } = renderWithProvider(
      <ListItemOption
        description="Description"
        header="Header"
        iconName="Area"
        title="Title"
        onPress={onPress}
        type="checkbox"
        accessibilityLabel={accessibilityLabel}
      />
    );

    // When
    fireEvent.press(getByLabelText(accessibilityLabel));

    // Then
    await waitFor(() => expect(onPress).toHaveBeenCalledTimes(1));
  });

  it('should call rightOption.onPress when button icon pressed', async () => {
    // Given
    const onPress = jest.fn();
    const onRightPress = jest.fn();
    const accessibilityLabel = 'Right icon';
    const { getByLabelText } = renderWithProvider(
      <ListItemOption
        description="Description"
        header="Header"
        iconName="Area"
        title="Title"
        onPress={onPress}
        type="checkbox"
        rightOption={{
          accessibilityLabel,
          iconName: 'Info',
          onPress: onRightPress,
        }}
      />
    );

    // When
    fireEvent.press(getByLabelText(accessibilityLabel));

    // Then
    await waitFor(() => expect(onRightPress).toHaveBeenCalledTimes(1));
    expect(onPress).toHaveBeenCalledTimes(0);
  });
});
