/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Forward = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M13 1a1 1 0 0 0-1 1v4.295l-9.254-5.23A.5.5 0 0 0 2 1.5v13a.5.5 0 0 0 .746.435L12 9.705V14a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1Z"
      fill={color}
    />
  </Svg>
);
export default Forward;
