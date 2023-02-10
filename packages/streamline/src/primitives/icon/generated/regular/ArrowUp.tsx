/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowUp = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5.532 11.589A1.5 1.5 0 1 1 3.468 9.41l7.5-7a1.5 1.5 0 0 1 2.064 0l7.5 7a1.5 1.5 0 1 1-2.064 2.178L13.5 6.987V20.5a1.5 1.5 0 0 1-3 0V6.987L5.532 11.59Z"
      fill={color}
    />
  </Svg>
);
export default ArrowUp;
