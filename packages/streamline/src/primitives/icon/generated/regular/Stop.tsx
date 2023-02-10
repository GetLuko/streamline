/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Rect } from 'react-native-svg';
const Stop = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Rect x={2} y={2} width={20} height={20} rx={4} fill={color} />
  </Svg>
);
export default Stop;
