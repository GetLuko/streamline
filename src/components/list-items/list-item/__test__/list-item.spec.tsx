import { fireEvent, waitFor } from '@testing-library/react-native';
import React from 'react';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import ListItem from '../list-item';

describe('ListItem', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onPress when pressed', async () => {
    // Given
    const onPress = jest.fn();
    const { getByText } = renderWithProvider(
      <ListItem
        description="Description"
        header="Header"
        iconName="Area"
        title="Title"
        onPress={onPress}
      />,
    );

    // When
    fireEvent.press(getByText('Header'));

    // Then
    await waitFor(() => expect(onPress).toHaveBeenCalledTimes(1));
  });

  it('should not call onPress when disabled', async () => {
    // Given
    const onPress = jest.fn();
    const { getByText } = renderWithProvider(
      <ListItem
        description="Description"
        header="Header"
        iconName="Area"
        isDisabled
        title="Title"
        onPress={onPress}
      />,
    );

    // When
    fireEvent.press(getByText('Title'));

    // Then
    await waitFor(() => expect(onPress).not.toHaveBeenCalled());
  });

  it('should call rightOption.onPress when button icon pressed', async () => {
    // Given
    const onPress = jest.fn();
    const onRightPress = jest.fn();
    const accessibilityLabel = 'Right icon';
    const { getByLabelText } = renderWithProvider(
      <ListItem
        description="Description"
        header="Header"
        iconName="Area"
        title="Title"
        onPress={onPress}
        rightOption={{
          accessibilityLabel,
          iconName: 'Info',
          onPress: onRightPress,
        }}
      />,
    );

    // When
    fireEvent.press(getByLabelText(accessibilityLabel));

    // Then
    await waitFor(() => expect(onRightPress).toHaveBeenCalledTimes(1));
    expect(onPress).toHaveBeenCalledTimes(0);
  });
});
