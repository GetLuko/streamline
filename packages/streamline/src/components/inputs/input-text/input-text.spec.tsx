import { act, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { renderWithProvider } from '../../../testing/render-with-provider';
import { InputText } from './input-text';

describe('InputText', () => {
  it('should render InputText with label', () => {
    const { getByLabelText } = renderWithProvider(<InputText label="label" />);
    expect(getByLabelText('label')).toBeTruthy();
  });

  it('should render InputText with placeholder', () => {
    const { getByPlaceholderText } = renderWithProvider(
      <InputText label="label" placeholder="placeholder" />
    );
    expect(getByPlaceholderText('placeholder')).toBeTruthy();
  });

  it('should render InputText with error', () => {
    const { getByText } = renderWithProvider(
      <InputText label="label" isError description="errorMessage" />
    );
    expect(getByText('errorMessage')).toBeTruthy();
  });

  it('should render InputText with description', () => {
    const { getByText } = renderWithProvider(
      <InputText label="label" description="description" />
    );
    expect(getByText('description')).toBeTruthy();
  });

  it('should render InputText with unit', () => {
    const { getByText } = renderWithProvider(
      <InputText label="label" unit="Kw/h" />
    );
    expect(getByText('Kw/h')).toBeTruthy();
  });

  it('should update InputText', async () => {
    // Given
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = renderWithProvider(
      <InputText
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

describe('InputText types', () => {
  it('should render InputText with password', () => {
    const { getByTestId } = renderWithProvider(
      <InputText label="label" type="password" />
    );
    expect(getByTestId('input-text-icon-EyeClosed')).toBeTruthy();
  });

  it('should render InputText with password visible', async () => {
    const { getByTestId } = renderWithProvider(
      <InputText label="label" type="password" />
    );
    // When
    await act(async () => {
      fireEvent.press(getByTestId('input-text-icon-EyeClosed'));
    });
    expect(getByTestId('input-text-icon-EyeOpen')).toBeTruthy();
  });

  it('should render InputText with calendar', () => {
    const { getByTestId } = renderWithProvider(
      <InputText label="label" type="calendar" />
    );
    expect(getByTestId('input-text-icon-Calendar')).toBeTruthy();
  });

  it('should render InputText with select', () => {
    const { getByTestId } = renderWithProvider(
      <InputText label="label" type="select" />
    );
    expect(getByTestId('input-text-icon-ChevronDown')).toBeTruthy();
  });
});
