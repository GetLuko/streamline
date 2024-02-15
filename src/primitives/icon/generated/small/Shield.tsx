/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Shield = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M3.001 3.479c0-.326.24-.602.554-.66.888-.168 2.663-.613 3.976-1.657a.758.758 0 0 1 .938 0c1.313 1.044 3.088 1.489 3.976 1.656.314.06.554.335.554.66-.003 1.502-.006 4.139.001 4.52C13 13.468 8 15 8 15s-5-1.533-5-7.002c.007-.373.004-3.015.001-4.52Z"
      fill={color}
    />
  </Svg>
);
export default Shield;
