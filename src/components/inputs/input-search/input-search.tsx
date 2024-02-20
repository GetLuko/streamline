import React from 'react';

import { InputText } from '../input-text/input-text';
import { InputTextProps, InputType } from '../input-text/types';

export type InputSearchProps = Pick<
  InputTextProps,
  'placeholder' | 'onChangeText'
>;

export function InputSearch({ placeholder, onChangeText }: InputSearchProps) {
  return (
    <InputText
      label=""
      placeholder={placeholder}
      inputType={InputType.SEARCH}
      onChangeText={onChangeText}
    />
  );
}

export default InputSearch;
