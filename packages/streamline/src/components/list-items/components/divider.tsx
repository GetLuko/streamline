import React, { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';

import { Box } from '../../../primitives/box/box';

export const Divider = (props: ComponentProps<typeof Box>) => (
  <Box
    backgroundColor="GREY_100"
    height={StyleSheet.hairlineWidth}
    {...props}
  />
);
