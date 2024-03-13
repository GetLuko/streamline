import { act, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import { NavigationBarSearch } from '../navigation-bar-search';

describe('NavigationBarSearch', () => {
  it('should render successfully', () => {
    const { queryByTestId } = renderWithProvider(<NavigationBarSearch />);
    expect(queryByTestId('close-input-search')).toBeNull();
  });

  it('should render NavigationBarSearch with placeholder', () => {
    const { getByPlaceholderText } = renderWithProvider(
      <NavigationBarSearch placeholder="placeholder" />
    );
    expect(getByPlaceholderText('placeholder')).toBeTruthy();
  });

  it('should call NavigationBarSearch onChangeText', async () => {
    // Given
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText, getByTestId } = renderWithProvider(
      <NavigationBarSearch
        placeholder="placeholder"
        onChangeText={onChangeTextMock}
      />
    );
    // When
    await act(async () => {
      fireEvent(
        getByPlaceholderText('placeholder'),
        'onChangeText',
        'Text changed'
      );
    });
    // Then
    expect(onChangeTextMock).toHaveBeenCalledWith('Text changed');
    expect(getByTestId('close-input-search')).toBeTruthy();
  });

  it('should call NavigationBarSearch cancel option onPress', async () => {
    // Given
    const onPressMock = jest.fn();
    const onChangeTextMock = jest.fn();
    const { getByText } = renderWithProvider(
      <NavigationBarSearch
        placeholder="placeholder"
        onChangeText={onChangeTextMock}
        cancelOption={{ text: 'Cancel', onPress: onPressMock }}
      />
    );
    // When
    await act(async () => {
      fireEvent.press(getByText('Cancel'));
    });
    // Then
    expect(onPressMock).toHaveBeenCalled();
    expect(onChangeTextMock).not.toHaveBeenCalled();
  });
});
