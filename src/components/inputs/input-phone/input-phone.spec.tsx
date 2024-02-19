import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { InputPhone } from './input-phone';
import { renderWithProvider } from '../../../testing/render-with-provider';

describe('InputPhone', () => {
  it('renders correctly with default props', () => {
    const { getByText } = renderWithProvider(
      <InputPhone onChangePhoneNumber={() => {}} />
    );

    // Check if the default country code (FR) is displayed
    expect(getByText('+33')).toBeTruthy();
  });

  it('calls the onChangePhoneNumber prop when the phone number is valid', () => {
    const handleChangePhoneNumber = jest.fn();
    const { getByTestId } = renderWithProvider(
      <InputPhone
        onChangePhoneNumber={handleChangePhoneNumber}
        testID="phone-input"
      />
    );

    fireEvent.changeText(getByTestId('phone-input'), '0123456789');

    expect(handleChangePhoneNumber).toHaveBeenCalled();
  });

  it('calls the onError prop when the phone number is invalid', () => {
    const handleError = jest.fn();
    const { getByTestId } = renderWithProvider(
      <InputPhone
        onChangePhoneNumber={() => {}}
        onError={handleError}
        testID="phone-input"
      />
    );

    fireEvent.changeText(getByTestId('phone-input'), 'invalid');

    expect(handleError).toHaveBeenCalled();
  });

  it('displays the correct country code when the countryCode prop is provided', () => {
    const { getByText } = renderWithProvider(
      <InputPhone countryCode="US" onChangePhoneNumber={() => {}} />
    );

    // Check if the provided country code (US) is displayed
    expect(getByText('+1')).toBeTruthy();
  });
});
