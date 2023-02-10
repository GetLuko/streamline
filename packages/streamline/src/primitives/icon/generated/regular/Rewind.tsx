/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Rewind = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 2a1 1 0 0 1 2 0v2.859A9.969 9.969 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a1 1 0 1 1 2 0 8 8 0 1 0 1.755-5H10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1V2Z"
      fill={color}
    />
  </Svg>
);
export default Rewind;
