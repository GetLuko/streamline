import React from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';

import { Box } from '../../../primitives/box/box';
import { useStreamlineTheme } from '../../../theme';
import { InputNumberCell } from './components/cell';
import { DEFAULT_CODE_LENGTH } from './input-number.constants';
import useInputNumber from './input-number.hook';
import { InputNumberProps } from './input-number.types';

export const InputNumber = ({
  length = DEFAULT_CODE_LENGTH,
  isDisabled,
  isError,
  code,
  onChange,
  autoFocus = false,
}: InputNumberProps) => {
  const {
    handleBackspace,
    handleCodeChange,
    handleOnBlur,
    handleOnFocus,
    handleOnLayout,
    isFocused,
    inputStyle,
    inputRef,
    handleOnContainerPress,
  } = useInputNumber({
    length,
    code,
    onChange,
    isDisabled,
    isError,
  });

  const { colors } = useStreamlineTheme();

  return (
    <Box>
      <Pressable
        style={styles.container}
        onLayout={handleOnLayout}
        onPress={handleOnContainerPress}
      >
        {new Array(length).fill(0).map((_, index) => (
          <InputNumberCell
            key={index}
            code={code}
            index={index}
            length={length}
            isInputFocused={isFocused}
            isDisabled={isDisabled}
            isError={isError}
          />
        ))}
      </Pressable>

      <TextInput
        autoFocus={autoFocus}
        editable={!isDisabled}
        ref={inputRef}
        autoComplete="sms-otp"
        onBlur={handleOnBlur}
        onChangeText={handleCodeChange}
        onFocus={handleOnFocus}
        keyboardType="number-pad"
        returnKeyType="done"
        selectionColor={colors.BLUKO_500}
        style={inputStyle}
        textContentType="oneTimeCode"
        maxLength={length}
        onKeyPress={handleBackspace}
        value=""
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default InputNumber;
