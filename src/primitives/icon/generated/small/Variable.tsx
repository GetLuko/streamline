/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Variable = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="m7.175 5.233 3.25 4.333a2.504 2.504 0 0 0-1.6 1.2l-3.25-4.332a2.504 2.504 0 0 0 1.6-1.2ZM6.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM2.825 5.233a2.504 2.504 0 0 0 1.6 1.2L2.8 8.6a1 1 0 1 1-1.6-1.2l1.625-2.167ZM11.575 9.566a2.505 2.505 0 0 1 1.6 1.2L14.8 8.6a1 1 0 0 0-1.6-1.2l-1.625 2.166ZM11 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={color}
    />
  </Svg>
);
export default Variable;
