import { fireEvent } from '@testing-library/react-native';
import { renderWithProvider } from '../../../../testing/render-with-provider';
import React from 'react';

import CardCallout from '../card-callout';

describe('CardCallout', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onPress when pressed', () => {
    // Given
    const onPress = jest.fn();
    const { getByText } = renderWithProvider(
      <CardCallout
        description="Description"
        header="Header"
        iconName="Area"
        onPress={onPress}
      />
    );

    // When
    fireEvent.press(getByText('Header'));
    fireEvent.press(getByText('Description'));

    // Then
    expect(onPress).toHaveBeenCalledTimes(2);
  });

  it('should call onDismiss when button icon pressed', () => {
    // Given
    const onPress = jest.fn();
    const onDismiss = jest.fn();
    const accessibilityLabel = 'Close button';
    const { getByLabelText } = renderWithProvider(
      <CardCallout
        dismissAction={{
          accessibilityLabel: accessibilityLabel,
          onDismiss,
        }}
        description="Description"
        header="Header"
        iconName="Area"
        onPress={onPress}
      />
    );

    // When
    fireEvent.press(getByLabelText(accessibilityLabel));

    // Then
    expect(onPress).toHaveBeenCalledTimes(0);
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
