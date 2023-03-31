import React from 'react';

import { InputTextArea } from './input-text-area';
import { renderWithProvider } from '../../../testing/render-with-provider';
import { act, fireEvent } from '@testing-library/react-native';

describe('InputTextArea', () => {
  it('should render InputTextArea with label', () => {
    const { getByLabelText } = renderWithProvider(
      <InputTextArea label="label" />
    );
    expect(getByLabelText('label')).toBeTruthy();
  });

  it('should render InputTextArea with placeholder', () => {
    const { getByPlaceholderText } = renderWithProvider(
      <InputTextArea label="label" placeholder="placeholder" />
    );
    expect(getByPlaceholderText('placeholder')).toBeTruthy();
  });

  it('should render InputTextArea with error', () => {
    const { getByText } = renderWithProvider(
      <InputTextArea label="label" isError description="errorMessage" />
    );
    expect(getByText('errorMessage')).toBeTruthy();
  });

  it('should render InputText with description', () => {
    const { getByText } = renderWithProvider(
      <InputTextArea label="label" description="description" />
    );
    expect(getByText('description')).toBeTruthy();
  });

  it('should render InputTextArea with unit', () => {
    const { getByText } = renderWithProvider(
      <InputTextArea label="label" unit="Kw/h" />
    );
    expect(getByText('Kw/h')).toBeTruthy();
  });

  it('should update InputTextArea', async () => {
    // Given
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = renderWithProvider(
      <InputTextArea
        label="label"
        placeholder="placeholder"
        onChangeText={onChangeTextMock}
      />
    );
    // When
    await act(async () => {
      fireEvent(
        getByPlaceholderText('placeholder'),
        'onChangeText',
        'Input updated'
      );
    });
    // Then
    expect(onChangeTextMock).toHaveBeenCalledWith('Input updated');
  });
});
