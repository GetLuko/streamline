import React from 'react';

import { InputText } from '../input-text/input-text';
import { InputTextProps } from '../input-text/types';

export type InputSearchProps = Pick<
  InputTextProps,
  'placeholder' | 'onChangeText'
>;

export function InputSearch({ placeholder, onChangeText }: InputSearchProps) {
  return (
    <InputText
      label=""
      placeholder={placeholder}
      inputType="SEARCH"
      onChangeText={onChangeText}
    />
  );
}

export default InputSearch;
