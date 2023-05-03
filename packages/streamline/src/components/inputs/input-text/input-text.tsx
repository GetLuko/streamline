import React from 'react';
import { ViewProps } from 'react-native';

import { Box } from '../../../primitives/box/box';
import { IconsName } from '../../../primitives/icon/icon.types';
import { Text } from '../../../primitives/text/text';
import InputTextIcon from './components/input-text-icon';
import { InputTextPrimitive } from './components/input-text-primitive';
import { useTextInput } from './input-text.hooks';
import { RefNativeTextInput, Root, InputTextProps } from './types';

export const InputText = React.forwardRef<RefNativeTextInput, InputTextProps>(
  (
    {
      isSearchInput = false,
      isDisabled = false,
      isEditable = true,
      isFocused = false,
      multiline = false,
      numberOfLines = 1,
      placeholder = '',
      secureTextEntry,
      pointerEvents,
      ...rest
    },
    forwardedRef
  ) => {
    const props: InputTextProps = {
      isSearchInput,
      isDisabled,
      isEditable,
      isFocused,
      multiline,
      numberOfLines,
      placeholder,
      secureTextEntry,
      pointerEvents,
      ...rest,
    };
    let root = React.useRef<Root>(null).current;
    const {
      secureEntry,
      focused: innerFocused,
      value,
      handleFocus,
      handleBlur,
      handleChangeText,
      handleSecureEntry,
    } = useTextInput(props);

    React.useImperativeHandle(forwardedRef, () => ({
      isFocused: () => {
        return root ? root.isFocused() : false;
      },
      setNativeProps: (args: Record<string, unknown>) => {
        return root && root.setNativeProps(args);
      },
      clear: () => {
        return root && root.clear();
      },

      focus: () => {
        return root && root.focus();
      },

      blur: () => {
        return root && root.blur();
      },
    }));

    const forceFocus = () => {
      return root?.focus();
    };
    return (
      <InputTextPrimitive
        {...props}
        textAlignVertical={multiline ? 'top' : 'center'}
        forceFocus={forceFocus}
        innerRef={(ref: any) => {
          root = ref;
        }}
        accessibilityLabel={props.label}
        isDisabled={isDisabled}
        isFocused={innerFocused}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        onFocus={handleFocus}
        left={undefined}
        right={getRightComponent(
          props.unit,
          props.rightIconName,
          props.type,
          pointerEvents,
          secureEntry,
          handleSecureEntry
        )}
        secureTextEntry={secureEntry}
        value={value}
        parentState={{
          focused: innerFocused,
        }}
      />
    );
  }
);

const getRightComponent = (
  unit?: string,
  rightIconName?: IconsName,
  inputType?: string,
  pointerEvents?: ViewProps['pointerEvents'],
  secureEntry?: boolean,
  handleSecureEntry?: () => void
) => {
  if (rightIconName) {
    return <InputTextIcon name={rightIconName} />;
  }

  if (inputType === 'calendar') {
    return (
      <InputTextIcon
        name="Calendar"
        forceTextInputFocus={true}
        pointerEvents={pointerEvents}
      />
    );
  }
  if (inputType === 'password') {
    return (
      <InputTextIcon
        name={secureEntry ? 'EyeClosed' : 'EyeOpen'}
        onPress={handleSecureEntry}
        forceTextInputFocus={false}
        pointerEvents={pointerEvents}
      />
    );
  }
  if (inputType === 'select') {
    return (
      <InputTextIcon
        name="ChevronDown"
        forceTextInputFocus={false}
        pointerEvents={pointerEvents}
      />
    );
  }

  if (unit) {
    return (
      <Box paddingLeft="xs" paddingTop="xxs" pointerEvents="none">
        <Text variant="body" color="GREY_700">
          {unit}
        </Text>
      </Box>
    );
  }
  return undefined;
};
