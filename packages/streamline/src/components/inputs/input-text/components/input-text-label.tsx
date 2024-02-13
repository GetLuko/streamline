import React from 'react';

import { InputTextLabelProps } from './types';
import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';

export const InputTextLabel = ({
  label,
  error,
  disabled,
}: InputTextLabelProps) => {
  const color = getColor({ error, disabled });
  return (
    <Box pointerEvents="none">
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
