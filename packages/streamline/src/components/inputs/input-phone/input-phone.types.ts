import { ParseError, PhoneNumber } from 'libphonenumber-js';
import { Countries } from 'libphonenumber-js/types';

import { InputTextProps } from '../input-text/types';

export type InputPhoneProps = InputTextProps & {
  countryCode?: keyof Countries;
  onCountryPickerPress?: () => void;
  onChangePhoneNumber?: (phoneNumber: PhoneNumber) => void;
  onError?: (error: ParseError) => void;
};

export type CountryPickerProps = Pick<
  InputPhoneProps,
  'countryCode' | 'isDisabled' | 'isError' | 'onCountryPickerPress'
>;
