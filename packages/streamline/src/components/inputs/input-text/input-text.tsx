import React from 'react';
import { ViewProps } from 'react-native';

import { RefNativeTextInput, Root, TextInputProps } from './types';
import { useTextInput } from './input-text.hooks';
import InputTextIcon from './components/input-text-icon';
import { InputTextPrimitive } from './components/input-text-primitive';
import { Text } from '../../../primitives/text/text';
import { Box } from '../../../primitives/box/box';
import { IconsName } from '../../../primitives/icon/icon.types';

export const InputText = React.forwardRef<RefNativeTextInput, TextInputProps>(
  (
    {
      isSearchInput = false,
      isDisabled = false,
      isEditable = true,
      isFocused = false,
      multiline = false,
      isLoading = false,
      numberOfLines = 1,
      placeholder = '',
      secureTextEntry,
      pointerEvents,
      ...rest
    },
    forwardedRef
  ) => {
    const props: TextInputProps = {
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
        forceFocus={forceFocus}
        innerRef={(ref: any) => {
          root = ref;
        }}
        accessibilityLabel={props.label}
        isDisabled={isDisabled || isLoading}
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
          handleSecureEntry,
          isLoading
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
  handleSecureEntry?: () => void,
  isLoading?: boolean
) => {
  let rightComponent;
  if (rightIconName) {
    rightComponent = <InputTextIcon name={rightIconName} />;
  }

  if (inputType === 'calendar') {
    rightComponent = (
      <InputTextIcon
        name="Calendar"
        forceTextInputFocus={true}
        pointerEvents={pointerEvents}
      />
    );
  }
  if (inputType === 'password') {
    rightComponent = (
      <InputTextIcon
        name={secureEntry ? 'EyeClosed' : 'EyeOpen'}
        onPress={handleSecureEntry}
        forceTextInputFocus={false}
        pointerEvents={pointerEvents}
      />
    );
  }
  if (inputType === 'select') {
    rightComponent = (
      <InputTextIcon
        name="ChevronDown"
        forceTextInputFocus={false}
        pointerEvents={pointerEvents}
        loading={isLoading}
      />
    );
  }
  if (isLoading) {
    rightComponent = (
      <InputTextIcon
        name="ChevronDown"
        forceTextInputFocus={false}
        pointerEvents={pointerEvents}
        loading={isLoading}
      />
    );
  }

  if (unit) {
    rightComponent = (
      <Box paddingLeft="xs" paddingTop="xxs" pointerEvents="none">
        <Text variant="body" color="GREY_700">
          {unit}
        </Text>
      </Box>
    );
  }
  return rightComponent;
};
