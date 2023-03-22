import { Text } from '../../../../primitives/text/text';
import React from 'react';

import { InputTextLabelProps } from './types';
import { ColorTheme } from '../../../../theme';
import { Box } from '../../../../primitives/box/box';

export const InputTextLabel = ({
  label,
  error,
  disabled,
}: InputTextLabelProps) => {
  const color = getColor({ error, disabled });
  return (
    <Box pointerEvents="none" accessibilityElementsHidden>
      <Text variant="subBodyBold" color={color} maxFontSizeMultiplier={1}>
        {label}
      </Text>
    </Box>
  );
};

const getColor = ({
  error,
  disabled,
}: {
  error?: boolean;
  disabled?: boolean;
}) => {
  let color: ColorTheme = 'GREY_1000';
  if (error) {
    color = 'TERRA_500';
  } else if (disabled) {
    color = 'GREY_300';
  }
  return color;
};
