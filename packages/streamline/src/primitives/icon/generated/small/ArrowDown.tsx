/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowDown = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M7.293 14.707a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L9 11.586V2a1 1 0 0 0-2 0v9.586L3.707 8.293a1 1 0 0 0-1.414 1.414l5 5Z"
      fill={color}
    />
  </Svg>
);
export default ArrowDown;
