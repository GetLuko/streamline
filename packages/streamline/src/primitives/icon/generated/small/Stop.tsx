/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Rect } from 'react-native-svg';
const Stop = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Rect x={2} y={2} width={12} height={12} rx={3} fill={color} />
  </Svg>
);
export default Stop;
