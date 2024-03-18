import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import CardOption from '../card-option';
import { CardOptionProps } from '../card-option.types';

const SWITCH_OPTION: CardOptionProps['switchOption'] = {
  label: 'Switch value',
  onChange: jest.fn(),
  value: true,
  testID: 'switch',
};

describe('CardOption', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onPress when pressed', () => {
    // Given
    const onPress = jest.fn();
    const { getByText } = renderWithProvider(
      <CardOption
        description="Description"
        header="Header"
        iconName="Area"
        onPress={onPress}
        title="Title"
        switchOption={SWITCH_OPTION}
      />
    );

    // When
    fireEvent.press(getByText('Header'));
    fireEvent.press(getByText('Description'));

    // Then
    expect(onPress).toHaveBeenCalledTimes(2);
  });

  it('should call switchOption onChange when switch pressed', () => {
    // Given
    const onPress = jest.fn();
    const { getByTestId } = renderWithProvider(
      <CardOption
        description="Description"
        header="Header"
        iconName="Area"
        onPress={onPress}
        title="Title"
        switchOption={SWITCH_OPTION}
      />
    );

    // When
    fireEvent.press(getByTestId('switch'));

    // Then
    expect(onPress).toHaveBeenCalledTimes(0);
    expect(SWITCH_OPTION.onChange).toHaveBeenCalledTimes(1);
  });
});
