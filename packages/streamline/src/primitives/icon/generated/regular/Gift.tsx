/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Gift = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11 2.5V4a1 1 0 0 1-1 1H8.5A2.5 2.5 0 1 1 11 2.5ZM15.5 5H14a1 1 0 0 1-1-1V2.5A2.5 2.5 0 1 1 15.5 5ZM10 21a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2.5a1.5 1.5 0 1 0 0 3H3v9a2 2 0 0 0 2 2h5ZM21 10v9a2 2 0 0 1-2 2h-5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.5a1.5 1.5 0 0 1 0 3H21Z"
      fill={color}
    />
  </Svg>
);
export default Gift;
