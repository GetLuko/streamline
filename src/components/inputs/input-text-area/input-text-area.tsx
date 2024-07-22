import React from 'react';

import { InputText } from '../input-text/input-text';
import { InputTextProps, RefNativeTextInput } from '../input-text/types';

export type InputTextAreaProps = Omit<
  InputTextProps,
  'numberOfLines' | 'multiline'
> & {
  inputRef?: (ref: RefNativeTextInput) => void;
};

export function InputTextArea(props: InputTextAreaProps) {
  return (
    <InputText
      {...props}
      placeholder={props.placeholder}
      label={props.label}
      multiline
      numberOfLines={10}
      ref={props.inputRef}
    />
  );
}
