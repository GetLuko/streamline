/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
const Spain = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={12} r={11} fill="#fff" />
    <Path
      d="M20.488 15A8.987 8.987 0 0 0 21 12c0-1.052-.18-2.062-.512-3H3.512A8.985 8.985 0 0 0 3 12c0 1.052.18 2.062.512 3h16.976Z"
      fill="#E9B857"
    />
    <Path
      d="M20.488 15a9.004 9.004 0 0 1-16.976 0h16.976ZM20.488 9H3.512a9.004 9.004 0 0 1 16.976 0Z"
      fill="#D95762"
    />
  </Svg>
);
export default Spain;
