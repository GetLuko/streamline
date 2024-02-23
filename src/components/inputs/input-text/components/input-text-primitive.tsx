import React from 'react';
import {
  TextInput as NativeTextInput,
  TextInputProps,
  View,
} from 'react-native';

import { IconAdornment } from './input-text-icon';
import { InputTextLabel } from './input-text-label';
import { TextInputPrimitiveProps } from './types';
import { Box } from '../../../../primitives/box/box';
import { Icon } from '../../../../primitives/icon/icon';
import { Text } from '../../../../primitives/text/text';
import { ColorTheme, useStreamlineTheme } from '../../../../theme';
import { InputOutline, OUTLINE_WIDTH } from '../../input-outline/input-outline';

const TEXT_INPUT_HEIGHT_WITHOUT_LABEL = 48;
const DEFAULTLINEHEIGHT = 18;

export const InputTextPrimitive = ({
  inputType = 'TEXT',
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
  const styles = useStyles({
    hasLeft: Boolean(left),
    isDisabled,
    numberOfLines,
  });
  const containerStyle = !label && inputType === 'TEXT' && styles.container;

  const inputContainer = (
    <Box flexGrow={1} flexBasis={0}>
      {render?.({
        ...rest,
        maxFontSizeMultiplier: 1,
        ref: innerRef,
        selectionColor: theme.colors.BLUKO_500,
        placeholder,
        placeholderTextColor: theme.colors.GREY_300,
        secureTextEntry,
        editable: !isDisabled && isEditable,
        multiline,
        numberOfLines,
        value,
        onFocus,
        onBlur,
        onChangeText,
        style: [
          styles.inputContainer,
          inputType === 'SEARCH'
            ? styles.inputSearchContainer
            : styles.inputPadding,
          // fix for dot secure text size who are too big with circular font
          secureTextEntry && value ? styles.secureTextEntry : undefined,
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
      <Box flexDirection="row" width={width} height={height}>
        {left ? (
          <View>
            <InputOutline />
            <Box flexGrow={1} justifyContent="center">
              {left}
            </Box>
          </View>
        ) : null}
        <Box flexGrow={1} style={styles.gutter}>
          {inputType === 'SEARCH' ? (
            <Box
              padding="xs"
              backgroundColor={isFocused ? 'GREY_150' : 'GREY_100'}
              justifyContent="space-between"
              flexDirection="row"
              borderRadius="round"
              height={44}
            >
              <Icon
                iconName="Search"
                color="GREY_400"
                size="large"
                containerStyle={styles.searchIcon}
              />
              {inputContainer}
              {right}
            </Box>
          ) : (
            <>
              <InputOutline
                hasActiveOutline={isFocused}
                backgroundColor={isDisabled ? 'GREY_25' : undefined}
                {...getOutlineStyle({ error: isError })}
              />
              <Box
                paddingHorizontal="md"
                flexDirection="row"
                paddingTop={multiline ? 'xs' : undefined}
                style={[
                  noPadding && styles.noPadding,
                  !multiline && styles.singleLineContainer,
                ]}
              >
                {inputContainer}
                <Box style={styles.inputPadding}>
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

const useStyles = ({
  hasLeft,
  isDisabled,
  maxWidth,
  numberOfLines,
}: {
  hasLeft: boolean;
  isDisabled?: boolean;
  maxWidth?: number;
  numberOfLines: number;
}) => {
  const { colors, spacing, textVariants } = useStreamlineTheme();
  return {
    gutter: {
      marginLeft: hasLeft ? spacing.xs : 0,
    },
    container: {
      paddingTop: spacing.xxs,
    },
    inputContainer: {
      flexGrow: 1,
      color: isDisabled ? colors.GREY_500 : colors.GREY_1000,
      fontFamily: textVariants.body.fontFamily,
      fontSize: textVariants.body.fontSize,
      minHeight: numberOfLines * DEFAULTLINEHEIGHT,
      maxWidth,
    },
    inputPadding: {
      paddingVertical: spacing.xs + OUTLINE_WIDTH,
    },
    noPadding: {
      paddingHorizontal: 0,
      paddingVertical: 0,
    },
    singleLineContainer: {
      height: TEXT_INPUT_HEIGHT_WITHOUT_LABEL,
    },
    searchIcon: {
      marginTop: 2,
      marginLeft: 5,
    },
    inputSearchContainer: {
      marginLeft: spacing.xs,
    },
    secureTextEntry: {
      fontFamily: 'System',
    },
  };
};
