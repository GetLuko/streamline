/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
const France = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={12} r={11} fill="#fff" />
    <Path d="M15 20.488a9.004 9.004 0 0 0 0-16.976v16.976Z" fill="#D95762" />
    <Path d="M9 20.488A9.004 9.004 0 0 1 9 3.512v16.976Z" fill={color} />
  </Svg>
);
export default France;
