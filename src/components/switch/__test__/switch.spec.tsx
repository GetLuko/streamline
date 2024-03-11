import { act, fireEvent } from '@testing-library/react-native';
import React from 'react';

import Switch from '../switch';
import { renderWithProvider } from '../../../testing/render-with-provider';

describe('Switch', () => {
  it('should render successfully and call onValueChange true', async () => {
    const toggle = jest.fn();
    const { getByTestId } = renderWithProvider(
      <Switch action={toggle} value={true} testID="switch" />
    );
    // When
    await act(async () => {
      fireEvent(getByTestId('switch'), 'onValueChange', false);
    });
    // Then
    expect(getByTestId('switch')).toBeTruthy();
    expect(toggle).toHaveBeenNthCalledWith(1, false);
  });

  it('should render successfully and call onValueChange false', async () => {
    const toggle = jest.fn();
    const { getByTestId } = renderWithProvider(
      <Switch action={toggle} value={true} testID="switch" />
    );
    // When
    await act(async () => {
      fireEvent(getByTestId('switch'), 'onValueChange', false);
    });
    // Then
    expect(getByTestId('switch')).toBeTruthy();
    expect(toggle).toHaveBeenNthCalledWith(1, false);
  });
});
