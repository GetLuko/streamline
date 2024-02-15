/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Water = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15a5 5 0 0 0 5-5c0-2.986-2.902-6.936-4.284-8.648a.911.911 0 0 0-1.432 0C5.902 3.064 3 7.014 3 10a5 5 0 0 0 5 5Zm4-5a.5.5 0 0 0-1 0 3 3 0 0 1-3 3 .5.5 0 1 0 0 1 4 4 0 0 0 4-4Z"
      fill={color}
    />
  </Svg>
);
export default Water;
