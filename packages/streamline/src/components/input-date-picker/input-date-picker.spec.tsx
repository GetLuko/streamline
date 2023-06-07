import React from 'react';

import { renderWithProvider } from '../../testing/render-with-provider';
import InputDatePicker from './input-date-picker';

describe('InputDatePicker', () => {
  it('should render successfully', () => {
    const { container } = renderWithProvider(
      <InputDatePicker
        label="Title"
        placeholder="Placeholder"
        description="Description"
      />
    );
    expect(container).toBeTruthy();
  });

  it('should render InputText with placeholder', () => {
    const { getByPlaceholderText } = renderWithProvider(
      <InputDatePicker
        label="Title"
        placeholder="Placeholder"
        description="Description"
      />
    );
    expect(getByPlaceholderText('Placeholder')).toBeTruthy();
  });

  it('should render InputText with error', () => {
    const { getByText } = renderWithProvider(
      <InputDatePicker label="label" isError description="errorMessage" />
    );
    expect(getByText('errorMessage')).toBeTruthy();
  });

  it('should render InputText with description', () => {
    const { getByText } = renderWithProvider(
      <InputDatePicker label="label" description="description" />
    );
    expect(getByText('description')).toBeTruthy();
  });

  it('should render InputText with value', () => {
    const { getByPlaceholderText } = renderWithProvider(
      <InputDatePicker
        label="label"
        date={new Date('2023-06-07')}
        placeholder="placeholder"
      />
    );
    const element = getByPlaceholderText('placeholder');
    expect(element.props.value).toBe('June 07, 2023');
  });
});
