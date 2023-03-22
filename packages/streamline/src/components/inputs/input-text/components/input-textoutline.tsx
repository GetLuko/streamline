import { Box } from '../../../../primitives/box/box';
import React from 'react';

import { OutlineProps } from './types';

const FOCUS_OUTLINE_OVERFLOW_OFFSET = -2;
export const OUTLINE_WIDTH = 2;

export const InputTextOutline = ({
  hasActiveOutline = false,
  activeColor = 'BLUKO_500',
  focusColor = 'BLUKO_100',
  outlineColor = 'GREY_100',
  backgroundColor = 'PURE_WHITE_1000',
}: OutlineProps) => {
  return (
    <>
      {hasActiveOutline && (
        <Box
          borderRadius="md"
          position="absolute"
          top={FOCUS_OUTLINE_OVERFLOW_OFFSET}
          left={FOCUS_OUTLINE_OVERFLOW_OFFSET}
          right={FOCUS_OUTLINE_OVERFLOW_OFFSET}
          bottom={FOCUS_OUTLINE_OVERFLOW_OFFSET}
          backgroundColor={focusColor}
          pointerEvents="none"
        />
      )}
      <Box
        pointerEvents="none"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor={backgroundColor}
        borderColor={hasActiveOutline ? activeColor : outlineColor}
        borderRadius="md"
        borderWidth={OUTLINE_WIDTH}
      />
    </>
  );
};
