/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Area3 = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path opacity={0.1} d="m2 9 10-7 10 7v13H2V9Z" fill={color} />
    <Path d="M4 20V10l8-5.5 8 5.5v10H4Z" fill={color} />
  </Svg>
);
export default Area3;
