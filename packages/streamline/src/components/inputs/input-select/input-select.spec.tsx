import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import InputSelect from './input-select';
import { renderWithProvider } from '../../../testing/render-with-provider';

describe('InputSelect', () => {
  it('should render successfully', () => {
    const { UNSAFE_root } = renderWithProvider(
      <InputSelect label="Password" placeholder="Placeholder" />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it('should render placeholder', () => {
    const { getByPlaceholderText } = renderWithProvider(
      <InputSelect label="Password" placeholder="Placeholder" />
    );
    expect(getByPlaceholderText('Placeholder')).toBeTruthy();
  });

  it('should render InputText with error', () => {
    const { getByText } = renderWithProvider(
      <InputSelect label="label" isError description="errorMessage" />
    );
    expect(getByText('errorMessage')).toBeTruthy();
  });

  it('should render InputText with description', () => {
    const { getByText } = renderWithProvider(
      <InputSelect label="label" description="description" />
    );
    expect(getByText('description')).toBeTruthy();
  });

  it('should render InputText with label', () => {
    const { getByText } = renderWithProvider(
      <InputSelect label="label" description="description" />
    );
    expect(getByText('label')).toBeTruthy();
  });

  it('should render InputText with value', () => {
    const { getByPlaceholderText } = renderWithProvider(
      <InputSelect label="label" placeholder="placeholder" value="value" />
    );
    const element = getByPlaceholderText('placeholder');
    expect(element.props.value).toBe('value');
  });

  it('should trigger onPress', () => {
    // Given
    const onPress = jest.fn();
    const { getByPlaceholderText } = renderWithProvider(
      <InputSelect
        label="label"
        placeholder="placeholder"
        value="value"
        onPress={onPress}
      />
    );
    // When
    fireEvent.press(getByPlaceholderText('placeholder'));
    // Then
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
