/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Area2 = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path opacity={0.1} d="m1 6 7-5 7 5v9H1V6Z" fill={color} />
    <Path opacity={0.15} d="M2 14V6.5l6-4.25 6 4.25V14H2Z" fill={color} />
    <Path d="M3 13V7l5-3.5L13 7v6H3Z" fill={color} />
  </Svg>
);
export default Area2;
