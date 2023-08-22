import { act, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { renderWithProvider } from '../../../testing/render-with-provider';
import InputSearch from './input-search';

describe('InputSearch', () => {
  it('should render successfully', () => {
    const { container, queryByTestId } = renderWithProvider(<InputSearch />);
    expect(container).toBeTruthy();
    expect(queryByTestId('close-input-search')).toBeNull();
  });

  it('should render InputSearch with placeholder', () => {
    const { getByPlaceholderText } = renderWithProvider(
      <InputSearch placeholder="placeholder" />
    );
    expect(getByPlaceholderText('placeholder')).toBeTruthy();
  });

  it('should call InputSearch onChangeText', async () => {
    // Given
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText, getByTestId } = renderWithProvider(
      <InputSearch placeholder="placeholder" onChangeText={onChangeTextMock} />
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
});
