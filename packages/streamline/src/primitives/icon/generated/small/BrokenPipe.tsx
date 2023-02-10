/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrokenPipe = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M2 3a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0h4l1-1.5L6 9l1.5-2-.667-2L9.5 7 9 9l2 1.5-.5 1.5H13a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0H3a1 1 0 0 0-1-1Z"
      fill={color}
    />
  </Svg>
);
export default BrokenPipe;
