/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';
const Rec = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Circle cx={8} cy={8} r={4} fill={color} />
  </Svg>
);
export default Rec;
