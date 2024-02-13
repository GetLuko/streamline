import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from 'react-native';

import { IconsName } from '../../../primitives/icon/icon.types';

export type Root = NativeTextInput | undefined | null;

export type RefNativeTextInput =
  | Pick<
      NativeTextInput,
      'isFocused' | 'setNativeProps' | 'clear' | 'focus' | 'blur'
    >
  | undefined
  | null;

export type InputTextProps = Omit<NativeTextInputProps, 'editable'> & {
  isDisabled?: boolean;
  isError?: boolean;
  description?: string;
  isFocused?: boolean;
  isEditable?: boolean;
  label?: string;
  multiline?: boolean;
  numberOfLines?: number;
  rightIconName?: IconsName;
  onBlur?: (arg: any) => void;
  onChangeText?: (value: string) => void;
  onFocus?: (arg: any) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  type?: 'calendar' | 'password' | 'select';
  value?: string;
  defaultValue?: string;
  render?: (props: any) => JSX.Element;
  maxWidth?: number;
  noOutline?: boolean;
  noPadding?: boolean;
  width?: number;
  height?: number;
  isSearchInput?: boolean;
  isPhoneInput?: boolean;
  unit?: string;
};
