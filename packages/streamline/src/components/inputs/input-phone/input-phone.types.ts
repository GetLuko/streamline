import { CountryCode, ParseError, PhoneNumber } from 'libphonenumber-js';

import { InputTextProps } from '../input-text/types';

export type InputPhoneProps = InputTextProps & {
  countryCode?: CountryCode;
  onCountryPickerPress?: () => void;
  onChangePhoneNumber?: (phoneNumber: PhoneNumber) => void;
  onError?: (error: ParseError) => void;
};

export type CountryPickerProps = Pick<
  InputPhoneProps,
  'countryCode' | 'isDisabled' | 'isError' | 'onCountryPickerPress'
>;
