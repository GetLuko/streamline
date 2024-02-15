/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';

import { InputTextProps } from './types';

export const useTextInput = (props: InputTextProps) => {
  const defaultSecureTextEntry =
    props.type === 'password' && props.secureTextEntry === undefined
      ? true
      : props.secureTextEntry;
  const validInputValue =
    props.value !== undefined ? props.value : props.defaultValue;
  const [secureEntry, setSecureEntry] = React.useState(defaultSecureTextEntry);
  const [focused, setFocused] = React.useState(props.isFocused!);
  const [value, setValue] = React.useState(validInputValue);

  React.useEffect(() => {
    if (validInputValue !== value) {
      setValue(validInputValue!);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);

  React.useEffect(() => {
    if (props.isFocused !== focused) {
      setFocused(props.isFocused!);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isFocused]);

  const handleFocus = (args: any) => {
    if (props.isDisabled || !props.isEditable) {
      return;
    }
    setFocused(true);
    if (props.onFocus) {
      props.onFocus(args);
    }
  };

  const handleBlur = (args: any) => {
    if (!props.isEditable) {
      return;
    }
    setFocused(false);
    if (props.onBlur) {
      props.onBlur(args);
    }
  };

  const handleChangeText = (changeValue: string) => {
    if (!props.isEditable) {
      return;
    }

    setValue(changeValue);
    if (props.onChangeText) {
      props.onChangeText(changeValue);
    }
  };

  const handleSecureEntry = () => setSecureEntry(!secureEntry);

  return {
    focused,
    handleBlur,
    handleChangeText,
    handleFocus,
    handleSecureEntry,
    secureEntry,
    value,
  };
};
