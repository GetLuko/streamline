import { act, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import { ListItemSwitch } from '../list-item-switch';

describe('ListItemSwitch', () => {
  it('should render successfully and call onValueChange true', async () => {
    const toggle = jest.fn();
    const { getByTestId } = renderWithProvider(
      <ListItemSwitch
        switchOption={{
          value: true,
          onChange: toggle,
          testID: 'switch',
        }}
        title="Title"
      />
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
      <ListItemSwitch
        switchOption={{
          value: true,
          onChange: toggle,
          testID: 'switch',
        }}
        title="Title"
      />
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
