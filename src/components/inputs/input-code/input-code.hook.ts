import { useEffect, useMemo, useRef, useState } from 'react';
import {
  LayoutChangeEvent,
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  TextStyle,
} from 'react-native';

import {
  CELL_SHADOW_CONTAINER_SIZE,
  DEFAULT_CODE_LENGTH,
} from './input-code.constants';
import { InputCodeProps } from './input-code.types';

const useInputCode = ({
  onChange,
  length = DEFAULT_CODE_LENGTH,
  isDisabled,
  isError,
}: InputCodeProps) => {
  const [code, setCode] = useState('');
  const ref = useRef<TextInput>(null);

  const [focused, setFocused] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    onChange(code);
  }, [code, onChange]);

  useEffect(() => {
    if (isError && code.length === length) {
      setCode('');
      // This is a workaround to fix the issue with the input not being focused on android
      setTimeout(() => {
        ref.current?.focus();
      }, 0);
    }
  }, [code.length, isError, length, onChange]);

  const handleBackspace = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    if (e.nativeEvent.key === 'Backspace') {
      setCode((prev) => prev.substring(0, prev.length - 1));
    }
  };

  const handleOnContainerPress = () => {
    if (isDisabled) {
      return;
    }
    ref.current?.focus();
  };

  const handleCodeChange = (text: string) => {
    if (text.length === length) {
      const sanitizedCode = text.replace(/[^0-9]/g, '');
      setCode(sanitizedCode);
      return;
    }
    if (code.length < length) {
      const valueInput = text.substring(text.length - 1, text.length);
      setCode((prev) => (prev + valueInput).substring(0, length));
    }
  };

  const handleOnBlur = () => {
    setFocused(false);
  };

  const handleOnFocus = () => {
    setFocused(true);
  };

  const handleOnLayout = (e: LayoutChangeEvent) =>
    setWidth(e.nativeEvent.layout.width);

  const inputStyle: TextStyle = useMemo(() => {
    const cellWidth = (width - length * 2 * 4 + 8) / length;
    return {
      left:
        cellWidth * code.length +
        8 * code.length +
        (code.length === length ? -cellWidth + 1 : 0),
      paddingRight: cellWidth / 2,
      width: cellWidth,
      position: 'absolute',
      textAlign: 'right',
      fontSize: 32,
      color: 'transparent',
      backgroundColor: 'transparent',
      height: CELL_SHADOW_CONTAINER_SIZE,
    };
  }, [code.length, length, width]);

  return {
    code,
    handleBackspace,
    handleCodeChange,
    handleOnContainerPress,
    handleOnLayout,
    handleOnFocus,
    handleOnBlur,
    inputStyle,
    isFocused: focused,
    inputRef: ref,
  };
};

export default useInputCode;
