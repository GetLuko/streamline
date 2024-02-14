/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Door = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12h-1V3a1 1 0 0 0-1-1H7.236c-.285 0-.315.417-.032.458l2.937.42a1 1 0 0 1 .859.99v9.265a1 1 0 0 1-.859.99L4 15H3V3Zm7 5.5c0 .828-.224 1.5-.5 1.5S9 9.328 9 8.5 9.224 7 9.5 7s.5.672.5 1.5Z"
      fill={color}
    />
  </Svg>
);
export default Door;
