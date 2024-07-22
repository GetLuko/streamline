import React from 'react';

import { InputText } from '../input-text/input-text';
import { InputTextProps, RefNativeTextInput } from '../input-text/types';

export type InputSearchProps = Pick<
  InputTextProps,
  'placeholder' | 'onChangeText'
> & {
  inputRef?: (ref: RefNativeTextInput) => void;
};

export function InputSearch({
  placeholder,
  onChangeText,
  inputRef,
}: InputSearchProps) {
  return (
    <InputText
      label=""
      placeholder={placeholder}
      inputType="SEARCH"
      onChangeText={onChangeText}
      ref={inputRef}
    />
  );
}

export default InputSearch;
