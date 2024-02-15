/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Variable = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="m11.149 8.135 4.169 6.022a4.507 4.507 0 0 0-2.466 1.708l-4.17-6.022a4.506 4.506 0 0 0 2.466-1.708ZM10 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM3.631 7.8a4.515 4.515 0 0 0 2.304 1.92l-2.283 2.74a1.5 1.5 0 1 1-2.304-1.92L3.63 7.8ZM18.065 14.28a4.515 4.515 0 0 1 2.304 1.92l2.283-2.74a1.5 1.5 0 0 0-2.304-1.92l-2.283 2.74ZM16.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      fill={color}
    />
  </Svg>
);
export default Variable;
