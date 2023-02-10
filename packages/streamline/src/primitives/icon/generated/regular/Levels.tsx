/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Levels = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2.323 7.468a.5.5 0 0 1 0-.93l8.21-3.254a4.003 4.003 0 0 1 2.949 0l8.209 3.254a.5.5 0 0 1 0 .93l-8.21 3.253a4.003 4.003 0 0 1-2.949 0l-8.21-3.253ZM5.115 15.574a.5.5 0 0 0-.368 0l-2.424.96a.5.5 0 0 0 0 .931l8.21 3.253a4.002 4.002 0 0 0 2.949 0l8.209-3.253a.5.5 0 0 0 0-.93l-2.424-.96a.5.5 0 0 0-.368 0l-5.417 2.146a4.003 4.003 0 0 1-2.95 0l-5.417-2.147Z"
      fill={color}
    />
    <Path
      d="M5.115 10.574a.5.5 0 0 0-.368 0l-2.424.96a.5.5 0 0 0 0 .931l8.21 3.253a4.002 4.002 0 0 0 2.949 0l8.209-3.253a.5.5 0 0 0 0-.93l-2.424-.96a.5.5 0 0 0-.368 0l-5.417 2.146a4.003 4.003 0 0 1-2.95 0l-5.417-2.147Z"
      fill={color}
    />
  </Svg>
);
export default Levels;
