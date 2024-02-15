/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Minus = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.5 10.5a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3h-17Z"
      fill={color}
    />
  </Svg>
);
export default Minus;
