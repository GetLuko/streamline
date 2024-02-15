/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Smile = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 7.25a.75.75 0 0 1 .75.75 2.25 2.25 0 0 0 4.5 0 .75.75 0 0 1 1.5 0 3.75 3.75 0 1 1-7.5 0A.75.75 0 0 1 5 7.25Z"
      fill={color}
    />
  </Svg>
);
export default Smile;
