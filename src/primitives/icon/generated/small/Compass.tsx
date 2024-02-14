/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Compass = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path d="M8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.854-10.854a.5.5 0 0 1 .083.597l-2.43 4.375a1 1 0 0 1-.389.388l-4.375 2.431a.5.5 0 0 1-.68-.68l2.43-4.375a1 1 0 0 1 .39-.388l4.374-2.431a.5.5 0 0 1 .597.083Z"
      fill={color}
    />
  </Svg>
);
export default Compass;
