/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Database = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 6c2.761 0 5-1.12 5-2.5S10.761 1 8 1 3 2.12 3 3.5 5.239 6 8 6Z"
      fill={color}
    />
    <Path
      d="M11.983 6.162C10.912 6.698 9.503 7 8 7c-1.502 0-2.912-.302-3.983-.838A4.865 4.865 0 0 1 3 5.492V6.5C3 7.88 5.239 9 8 9s5-1.12 5-2.5V5.492c-.31.27-.663.493-1.017.67Z"
      fill={color}
    />
    <Path
      d="M8 10c1.502 0 2.912-.302 3.983-.838.354-.177.707-.4 1.017-.67V9.5c0 1.38-2.239 2.5-5 2.5s-5-1.12-5-2.5V8.492c.31.27.663.493 1.017.67C5.088 9.698 6.497 10 8 10Z"
      fill={color}
    />
    <Path
      d="M11.983 12.162C10.912 12.698 9.503 13 8 13c-1.502 0-2.912-.302-3.983-.838A4.863 4.863 0 0 1 3 11.492V12.5C3 13.88 5.239 15 8 15s5-1.12 5-2.5v-1.008a4.86 4.86 0 0 1-1.017.67Z"
      fill={color}
    />
  </Svg>
);
export default Database;
