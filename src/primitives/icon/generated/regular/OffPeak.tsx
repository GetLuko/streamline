/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const OffPeak = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7.567 4.001c.468.021.9.26 1.166.645l6.585 9.51a4.507 4.507 0 0 0-2.466 1.71L7.39 7.975 3.652 12.46a1.5 1.5 0 1 1-2.304-1.92l5-6A1.5 1.5 0 0 1 7.567 4ZM20.369 16.2a4.514 4.514 0 0 0-2.304-1.92l2.283-2.74a1.5 1.5 0 1 1 2.304 1.92L20.37 16.2ZM16.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      fill={color}
    />
  </Svg>
);
export default OffPeak;
