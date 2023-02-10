/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Computer = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3a1 1 0 0 0-1 1v8H1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1h-1V4a1 1 0 0 0-1-1H3Zm4.5 9.5A.5.5 0 0 1 7 12h2a.5.5 0 0 1-.5.5h-1ZM13 4H3v7h10V4Z"
      fill={color}
    />
  </Svg>
);
export default Computer;
