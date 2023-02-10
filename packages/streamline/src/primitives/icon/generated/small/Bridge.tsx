/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bridge = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 2 8a6 6 0 0 1 12 0Z"
      fill={color}
    />
  </Svg>
);
export default Bridge;
