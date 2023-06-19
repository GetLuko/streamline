import React from 'react';

import { InputText } from '../inputs/input-text/input-text';
import { InputTextProps } from '../inputs/input-text/types';

export type InputSearchProps = Pick<
  InputTextProps,
  'placeholder' | 'onChangeText'
>;

export function InputSearch({ placeholder, onChangeText }: InputSearchProps) {
  return (
    <InputText
      label=""
      placeholder={placeholder}
      isSearchInput
      onChangeText={onChangeText}
    />
  );
}

export default InputSearch;
