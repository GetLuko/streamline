import React from 'react';

import { InputText } from '../input-text/input-text';
import { InputTextProps } from '../input-text/types';

export type InputTextAreaProps = Omit<
  InputTextProps,
  'numberOfLines' | 'multiline'
>;

export function InputTextArea(props: InputTextAreaProps) {
  return (
    <InputText
      {...props}
      placeholder={props.placeholder}
      label={props.label}
      multiline
      numberOfLines={10}
    />
  );
}
