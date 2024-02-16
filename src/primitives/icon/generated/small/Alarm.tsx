/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Alarm = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M5.246 1.212a.5.5 0 0 1-.121.697A4.993 4.993 0 0 0 3 6c0 .474.066.931.188 1.364a.5.5 0 0 1-.962.272A6.004 6.004 0 0 1 2 6a5.993 5.993 0 0 1 2.549-4.909.5.5 0 0 1 .697.121ZM10.754 1.212a.5.5 0 0 1 .697-.12A5.994 5.994 0 0 1 14 6c0 .567-.079 1.115-.226 1.636a.5.5 0 0 1-.962-.272C12.934 6.931 13 6.474 13 6c0-1.69-.839-3.185-2.125-4.091a.5.5 0 0 1-.12-.697Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 6a4 4 0 1 1 8 0v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6Zm4-3a.5.5 0 0 0 0 1 2 2 0 0 1 2 2 .5.5 0 0 0 1 0 3 3 0 0 0-3-3Z"
      fill={color}
    />
    <Path
      d="M4 12a2 2 0 0 0-2 2 1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 2 2 0 0 0-2-2H4Z"
      fill={color}
    />
  </Svg>
);
export default Alarm;
