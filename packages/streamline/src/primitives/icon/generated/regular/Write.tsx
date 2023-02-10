/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Write = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="m22.414 4.414-9.483 9.483a6 6 0 0 1-2.384 1.463l-1.892.616a.5.5 0 0 1-.63-.63l.615-1.893a6 6 0 0 1 1.463-2.384l9.483-9.483a2 2 0 1 1 2.828 2.828Z"
      fill={color}
    />
    <Path
      d="M4 5a1 1 0 0 1 1-1h7.5a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7.5a1 1 0 1 0-2 0V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Z"
      fill={color}
    />
  </Svg>
);
export default Write;
