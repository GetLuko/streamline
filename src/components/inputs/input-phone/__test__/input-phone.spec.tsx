import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import { InputPhone } from '../input-phone';

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

  it('onValidChange prop should return false when phone number is not valid', () => {
    const onValidChange = jest.fn();
    const { getByTestId } = renderWithProvider(
      <InputPhone
        onChangePhoneNumber={() => {}}
        onValidChange={onValidChange}
        testID="phone-input"
      />
    );

    fireEvent.changeText(getByTestId('phone-input'), 'invalid');

    expect(onValidChange).toHaveBeenCalledWith(false);
  });
  it('onValidChange prop should return true when phone number is valid', () => {
    const onValidChange = jest.fn();
    const { getByTestId } = renderWithProvider(
      <InputPhone
        onChangePhoneNumber={() => {}}
        onValidChange={onValidChange}
        testID="phone-input"
      />
    );

    fireEvent.changeText(getByTestId('phone-input'), '0612345678');

    expect(onValidChange).toHaveBeenCalledWith(true);
  });

  it('displays the correct country code when the countryCode prop is provided', () => {
    const { getByText } = renderWithProvider(
      <InputPhone countryCode="US" onChangePhoneNumber={() => {}} />
    );

    // Check if the provided country code (US) is displayed
    expect(getByText('+1')).toBeTruthy();
  });
});
