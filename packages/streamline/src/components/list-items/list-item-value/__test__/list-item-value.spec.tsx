import { fireEvent, waitFor } from '@testing-library/react-native';
import React from 'react';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import ListItemValue from '../list-item-value';

describe('ListItemValue', () => {
  afterEach(jest.clearAllMocks);

  it('should call onPress when pressed', async () => {
    // Given
    const onPress = jest.fn();
    const { getByText } = renderWithProvider(
      <ListItemValue
        description="Description"
        header="Header"
        iconName="Area"
        title="Title"
        onPress={onPress}
        value="Value"
      />
    );

    // When
    fireEvent.press(getByText('Value'));

    // Then
    await waitFor(() => expect(onPress).toHaveBeenCalledTimes(1));
  });

  it('should call rightOption.onPress when button icon pressed', async () => {
    // Given
    const onPress = jest.fn();
    const onRightPress = jest.fn();
    const accessibilityLabel = 'Right icon';
    const { getByLabelText } = renderWithProvider(
      <ListItemValue
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
        value="Value"
      />
    );

    // When
    fireEvent.press(getByLabelText(accessibilityLabel));

    // Then
    await waitFor(() => expect(onRightPress).toHaveBeenCalledTimes(1));
    expect(onPress).toHaveBeenCalledTimes(0);
  });
});
