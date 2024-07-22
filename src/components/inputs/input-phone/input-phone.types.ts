import { CountryCode, PhoneNumber } from 'libphonenumber-js';

import { InputTextProps, RefNativeTextInput } from '../input-text/types';

export type InputPhoneProps = InputTextProps & {
  countryCode?: CountryCode;
  onCountryPickerPress?: () => void;
  onChangePhoneNumber?: (phoneNumber: PhoneNumber) => void;
  onValidChange?: (isValid: boolean) => void;
  inputRef?: (ref: RefNativeTextInput) => void;
};

export type CountryPickerProps = Pick<
  InputPhoneProps,
  'countryCode' | 'isDisabled' | 'isError' | 'onCountryPickerPress'
>;
