/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Clock = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 3.5a.5.5 0 0 0-1 0V8a.5.5 0 0 0 .11.312l2 2.5a.5.5 0 1 0 .78-.624L8 7.825V3.5Z"
      fill={color}
    />
  </Svg>
);
export default Clock;
