/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const House = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="m1.211 6.092 6.205-4.91a1 1 0 0 1 1.158 0l6.212 4.91a.5.5 0 0 1-.29.908H14a1 1 0 0 0-1 1v5H9.5V9a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4H3V8a1 1 0 0 0-1-1h-.499a.5.5 0 0 1-.29-.908Z"
      fill={color}
    />
  </Svg>
);
export default House;
