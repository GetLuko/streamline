/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Kangaroo = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 5a4 4 0 1 1 8 0v6a4 4 0 0 1-8 0V5Zm2.5-.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1Zm1 4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1Z"
      fill={color}
    />
  </Svg>
);
export default Kangaroo;
