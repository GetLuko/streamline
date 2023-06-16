import { InputTextProps } from '../input-text/types';

export type InputPhoneProps = InputTextProps & {
  countryCode?: string;
  onCountrySelectorPress?: () => void;
};
