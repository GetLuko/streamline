/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Stack = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M5 2a1 1 0 0 0-1 1h8a1 1 0 0 0-1-1H5ZM3 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1H3ZM2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Z"
      fill={color}
    />
  </Svg>
);
export default Stack;
