/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const OffPeak = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M5 3a1 1 0 0 1 .8.4l4.625 6.166a2.504 2.504 0 0 0-1.6 1.2L5 5.667 2.8 8.6a1 1 0 1 1-1.6-1.2l3-4A1 1 0 0 1 5 3ZM13.175 10.767a2.504 2.504 0 0 0-1.6-1.2L13.2 7.4a1 1 0 1 1 1.6 1.2l-1.625 2.167ZM11 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={color}
    />
  </Svg>
);
export default OffPeak;
