/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Rec = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" fill={color} />
  </Svg>
);
export default Rec;
