/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Area1 = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path opacity={0.1} d="m2 9 10-7 10 7v13H2V9Z" fill={color} />
    <Path opacity={0.15} d="M4 20V10l8-5.5 8 5.5v10H4Z" fill={color} />
    <Path opacity={0.2} d="M6 18v-7l6-4 6 4v7H6Z" fill={color} />
    <Path d="M12 9.5 8 12v4h8v-4l-4-2.5Z" fill={color} />
  </Svg>
);
export default Area1;
