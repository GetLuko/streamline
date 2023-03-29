import { Box } from '../../../../primitives/box/box';
import { Icon } from '../../../../primitives/icon/icon';
import { Text } from '../../../../primitives/text/text';
import { ColorTheme, useStreamlineTheme } from '../../../../theme';
import React from 'react';
import {
  TextInput as NativeTextInput,
  TextInputProps,
  View,
} from 'react-native';
import { IconAdornment } from './input-text-icon';
import { InputTextLabel } from './input-text-label';
import { InputTextOutline, OUTLINE_WIDTH } from './input-textoutline';

import { TextInputPrimitiveProps } from './types';

const TEXT_INPUT_HEIGHT_WITHOUT_LABEL = 48;
const DEFAULTLINEHEIGHT = 18;

export const InputTextPrimitive = ({
  isSearchInput,
  isDisabled,
  isEditable,
  isError,
  description,
  multiline,
  numberOfLines = 1,
  isFocused,
  label,
  placeholder,
  secureTextEntry,
  value,
  onFocus,
  onBlur,
  onChangeText,
  right,
  left,
  forceFocus,
  parentState,
  innerRef,
  pointerEvents,
  render = (props: TextInputProps) => <NativeTextInput {...props} />,
  maxWidth,
  width,
  height,
  noPadding,
  ...rest
}: TextInputPrimitiveProps) => {
  const theme = useStreamlineTheme();
  const gutterStyle = { marginLeft: left ? theme.spacing.xs : 0 };
  const containerStyle = !label &&
    !isSearchInput && { paddingTop: theme.spacing.xxs };
  const inputPadding = { paddingVertical: theme.spacing.xs + OUTLINE_WIDTH };
  const inputContainer = (
    <Box flexGrow={1} flexBasis={0}>
      {render?.({
        ...rest,
        maxFontSizeMultiplier: 1,
        ref: innerRef,
        selectionColor: theme.colors.BLUKO_1000,
        placeholder: placeholder,
        placeholderTextColor: theme.colors.GREY_300,
        secureTextEntry: secureTextEntry,
        editable: !isDisabled && isEditable,
        multiline: multiline,
        numberOfLines: numberOfLines,
        value: value,
        onFocus: onFocus,
        onBlur: onBlur,
        onChangeText: onChangeText,
        style: [
          {
            flexGrow: 1,
            color: theme.colors.GREY_1000,
            fontFamily: theme.textVariants.body.fontFamily,
            fontSize: theme.textVariants.body.fontSize,
            minHeight: numberOfLines * DEFAULTLINEHEIGHT,
          },
          isSearchInput
            ? {
                marginLeft: theme.spacing.xxs,
              }
            : inputPadding,
          isDisabled && { color: theme.colors.GREY_500 },
          isError && isDisabled && { color: theme.colors.GREY_500 },
          // fix for dot secure text size who are too big with circular font
          secureTextEntry && value ? { fontFamily: 'System' } : {},
          maxWidth ? { maxWidth } : undefined,
          rest.style,
        ],
      })}
    </Box>
  );
  return (
    <View style={containerStyle} pointerEvents={pointerEvents}>
      {label ? (
        <Box paddingBottom="xs">
          <InputTextLabel
            label={label}
            active={isFocused}
            disabled={isDisabled}
          />
        </Box>
      ) : null}
      <Box flexDirection={'row'} width={width} height={height}>
        {left ? (
          <View>
            <InputTextOutline />
            <Box flexGrow={1} justifyContent="center">
              {left}
            </Box>
          </View>
        ) : null}
        <Box flexGrow={1} style={gutterStyle}>
          {isSearchInput ? (
            <Box
              padding="xs"
              backgroundColor="GREY_100"
              justifyContent="space-between"
              flexDirection="row"
              borderRadius="md"
            >
              <Icon iconName="Search" color={'GREY_400'} />
              {inputContainer}
            </Box>
          ) : (
            <>
              <InputTextOutline
                hasActiveOutline={isFocused}
                backgroundColor={isDisabled ? 'GREY_25' : undefined}
                {...getOutlineStyle({ error: isError })}
              />
              <Box
                paddingHorizontal="md"
                flexDirection="row"
                style={[
                  noPadding && { paddingHorizontal: 0, paddingVertical: 0 },
                  !multiline && { height: TEXT_INPUT_HEIGHT_WITHOUT_LABEL },
                ]}
              >
                {inputContainer}
                <Box style={inputPadding}>
                  <IconAdornment
                    icon={right}
                    isTextInputFocused={parentState.focused}
                    forceFocus={forceFocus}
                    disabled={isDisabled}
                  />
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
      {description ? (
        <Text
          color={isError ? 'TERRA_500' : 'GREY_500'}
          variant="caption"
          marginTop="xs"
        >
          {description}
        </Text>
      ) : null}
    </View>
  );
};

const getOutlineStyle = ({
  error,
}: {
  error?: boolean;
}): {
  activeColor: ColorTheme;
  outlineColor: ColorTheme;
  focusColor: ColorTheme;
} => {
  if (error) {
    return {
      activeColor: 'TERRA_500',
      outlineColor: 'TERRA_500',
      focusColor: 'TERRA_100',
    };
  }
  return {
    activeColor: 'BLUKO_500',
    outlineColor: 'GREY_100',
    focusColor: 'BLUKO_100',
  };
};
