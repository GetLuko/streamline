import React from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';

import { Box } from '../../../primitives/box/box';
import { useStreamlineTheme } from '../../../theme';
import { InputCodeCell } from './components/cell';
import { DEFAULT_CODE_LENGTH } from './input-code.constants';
import useInputCode from './input-code.hook';
import { InputCodeProps } from './input-code.types';

export const InputCode = ({
  length = DEFAULT_CODE_LENGTH,
  isDisabled,
  isError,
  code,
  onChange,
  autoFocus = false,
  testID,
}: InputCodeProps) => {
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
  } = useInputCode({
    length,
    code,
    onChange,
    isDisabled,
    isError,
  });

  const { colors } = useStreamlineTheme();

  return (
    <Box testID={testID}>
      <Pressable
        testID={testID && `${testID}-container`}
        style={styles.container}
        onLayout={handleOnLayout}
        onPress={handleOnContainerPress}
      >
        {new Array(length).fill(0).map((_, index) => (
          <InputCodeCell
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
        testID={testID && `${testID}-text-field`}
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

export default InputCode;
