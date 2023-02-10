/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Minus = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path d="M2 7a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H2Z" fill={color} />
  </Svg>
);
export default Minus;
