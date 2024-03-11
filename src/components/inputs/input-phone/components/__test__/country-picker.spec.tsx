import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import CountryPicker from '../country-picker';
import { renderWithProvider } from '../../../../../testing/render-with-provider';

describe('CountryPicker', () => {
  it('renders correctly with default props', () => {
    const { getByText } = renderWithProvider(
      <CountryPicker onCountryPickerPress={() => {}} />
    );

    // Check if the default country code (FR) is displayed
    expect(getByText('+33')).toBeTruthy();
  });

  it('calls the onCountryPickerPress prop when pressed', () => {
    const handlePress = jest.fn();
    const { getByText } = renderWithProvider(
      <CountryPicker onCountryPickerPress={handlePress} />
    );

    fireEvent.press(getByText('+33'));

    expect(handlePress).toHaveBeenCalled();
  });

  it('displays the correct country code when the countryCode prop is provided', () => {
    const { getByText } = renderWithProvider(
      <CountryPicker countryCode="US" onCountryPickerPress={() => {}} />
    );

    // Check if the provided country code (US) is displayed
    expect(getByText('+1')).toBeTruthy();
  });
});
