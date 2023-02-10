/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Send = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M3.447 1.106A1 1 0 0 0 2 2v4.08a1 1 0 0 0 .917.996L14 8l-11.083.924A1 1 0 0 0 2 9.92V14a1 1 0 0 0 1.447.894l12-6a1 1 0 0 0 0-1.788l-12-6Z"
      fill={color}
    />
  </Svg>
);
export default Send;
