import { fireEvent } from '@testing-library/react-native';
import { renderWithProvider } from '../../../testing/render-with-provider';
import React from 'react';

import ButtonIcon from './button-icon';

describe('ButtonIcon', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { container } = renderWithProvider(
      <ButtonIcon accessibilityLabel="test" iconName="Cross" />
    );
    expect(container).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    // Given
    const onPress = jest.fn();
    const { getByTestId } = renderWithProvider(
      <ButtonIcon
        onPress={onPress}
        testID="test-id"
        accessibilityLabel="test"
        iconName="Cross"
        appearance="primary"
      />
    );

    // When
    fireEvent.press(getByTestId('test-id'));

    // Then
    expect(onPress).toHaveBeenCalledTimes(1);
  });
  it('should not call onPress when Loading', () => {
    // Given
    const onPress = jest.fn();
    const { getByTestId } = renderWithProvider(
      <ButtonIcon
        onPress={onPress}
        testID="test-id"
        accessibilityLabel="test"
        iconName="Cross"
        appearance="primary"
        isLoading
      />
    );

    // When
    fireEvent.press(getByTestId('test-id'));

    // Then
    expect(onPress).toHaveBeenCalledTimes(0);
  });

  it('should not call onPress when Disabled', () => {
    // Given
    const onPress = jest.fn();
    const { getByTestId } = renderWithProvider(
      <ButtonIcon
        onPress={onPress}
        testID="test-id"
        accessibilityLabel="test"
        iconName="Cross"
        appearance="primary"
        isDisabled
      />
    );

    // When
    fireEvent.press(getByTestId('test-id'));

    // Then
    expect(onPress).toHaveBeenCalledTimes(0);
  });
});
