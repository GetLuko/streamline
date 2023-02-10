/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Info = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 7a.75.75 0 0 0-.75.75v3.5a.75.75 0 1 0 1.5 0v-3.5A.75.75 0 0 0 8 7Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
      fill={color}
    />
  </Svg>
);
export default Info;
