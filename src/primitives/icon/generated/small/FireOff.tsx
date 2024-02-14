/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const FireOff = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M14.854 1.854a.5.5 0 0 0-.708-.708L10.093 5.2C7.344 3.236 8.627 1 8.627 1 5.64 2.688 4.77 5.382 5.5 8.639c-.937-.637-1.284-1.219-1.25-2.546-1.268 1.33-1.256 2.947-1.25 3.66v.155c0 .48.166 1.35.401 1.982l-2.256 2.256a.5.5 0 0 0 .708.708l13-13ZM4.54 13.582 11.67 6.45A5.126 5.126 0 0 1 13 9.908C13 12.72 10.762 15 8 15a4.935 4.935 0 0 1-3.46-1.418Z"
      fill={color}
    />
  </Svg>
);
export default FireOff;
