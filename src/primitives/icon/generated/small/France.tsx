/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
const France = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Circle cx={8} cy={8} r={7} fill="#fff" />
    <Path d="M10 13.659A6.003 6.003 0 0 0 10 2.34v11.317Z" fill="#D95762" />
    <Path d="M6 13.659A6.003 6.003 0 0 1 6 2.34v11.317Z" fill={color} />
  </Svg>
);
export default France;
