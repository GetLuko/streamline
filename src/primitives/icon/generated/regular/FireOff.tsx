/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const FireOff = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="m4.597 17.988-2.304 2.305a1 1 0 1 0 1.414 1.414l18-18a1 1 0 0 0-1.414-1.414l-5.154 5.153C11.014 4.4 13 1 13 1 8.222 3.652 6.83 7.884 8 13c-1.5-1-2.054-1.915-2-4-2.03 2.091-2.01 4.63-2 5.751v.242c0 .724.244 2.013.597 2.995ZM7.002 21.24 18.247 9.995A8 8 0 0 1 7.002 21.24Z"
      fill={color}
    />
  </Svg>
);
export default FireOff;
