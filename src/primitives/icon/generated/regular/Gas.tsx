/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Gas = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M4 15c0-3.463 1.703-5.79 3.294-7.966C8.69 5.127 10 3.336 10 1c3.277 2.13 9.776 7.804 9.994 13.696a8.003 8.003 0 0 1-4.997 7.724C19.289 17.084 16.377 11.412 13 9c.5 5-1 6.5-2 7.5 0-1-.3-2.3-1.5-3.5 0 .641-.365 1.339-.784 2.137C8.156 16.207 7.5 17.46 7.5 19c0 1.69.357 2.31 1.373 3.366A8.002 8.002 0 0 1 4 15Z"
      fill={color}
    />
  </Svg>
);
export default Gas;
