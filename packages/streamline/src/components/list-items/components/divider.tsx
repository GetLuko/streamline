import React from 'react';
import { StyleSheet } from 'react-native';

import { Box } from '../../../primitives/box/box';

const DIVIDER_VERTICAL_MARGIN = 16;

export const Divider = ({ leftSpacing }: { leftSpacing: number }) => (
  <Box
    backgroundColor="GREY_100"
    position="absolute"
    height={StyleSheet.hairlineWidth}
    right={DIVIDER_VERTICAL_MARGIN}
    bottom={0}
    left={DIVIDER_VERTICAL_MARGIN + leftSpacing}
  />
);
