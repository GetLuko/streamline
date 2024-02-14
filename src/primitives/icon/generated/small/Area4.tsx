/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Area4 = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path d="M1 5.9 8 1l7 4.9V15H1V5.9Z" fill="#EBF5FF" />
    <Path d="m1 6 7-5 7 5v9H1V6Z" fill={color} />
  </Svg>
);
export default Area4;
