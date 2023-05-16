import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { InputTextLabelProps } from './types';

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
  if (error) {
    return 'TERRA_500';
  }
  if (disabled) {
    return 'GREY_300';
  }
  return 'GREY_1000';
};
