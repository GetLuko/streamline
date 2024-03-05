import { CountryCode, PhoneNumber } from 'libphonenumber-js';

import { InputTextProps } from '../input-text/types';

export type InputPhoneProps = InputTextProps & {
  countryCode?: CountryCode;
  onCountryPickerPress?: () => void;
  onChangePhoneNumber?: (phoneNumber: PhoneNumber) => void;
  onValidChange?: (isValid: boolean) => void;
};

export type CountryPickerProps = Pick<
  InputPhoneProps,
  'countryCode' | 'isDisabled' | 'isError' | 'onCountryPickerPress'
>;
