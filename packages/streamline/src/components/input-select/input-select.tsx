import React from 'react';
import { Pressable } from 'react-native-ama';

import { InputText } from '../inputs/input-text/input-text';

export interface InputSelectProps {
  label: string;
  placeholder?: string;
  description?: string;
  isDisabled?: boolean;
  isError?: boolean;
  testID?: string;
  value?: string;
  onPress?: () => void;
  isFocused?: boolean;
}

export function InputSelect({
  testID,
  isDisabled,
  label,
  description,
  placeholder,
  value,
  onPress,
  isFocused,
  isError,
}: InputSelectProps) {
  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <InputText
        type="select"
        pointerEvents="none"
        label={label}
        placeholder={placeholder}
        description={description}
        isDisabled={isDisabled}
        value={value}
        isFocused={isFocused}
        isError={isError}
      />
    </Pressable>
  );
}

export default InputSelect;
