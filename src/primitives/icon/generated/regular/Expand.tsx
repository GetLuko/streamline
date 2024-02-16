/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Expand = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16.232 5.646 12.44 9.44a1.5 1.5 0 0 0 2.122 2.122l3.793-3.793 1.939 1.94A1 1 0 0 0 22 9V3a1 1 0 0 0-1-1h-6a1 1 0 0 0-.707 1.707l1.94 1.94ZM7.768 18.354l3.793-3.793a1.5 1.5 0 0 0-2.122-2.122l-3.793 3.793-1.939-1.94A1 1 0 0 0 2 15v6a1 1 0 0 0 1 1h6a1 1 0 0 0 .707-1.707l-1.94-1.94Z"
      fill={color}
    />
  </Svg>
);
export default Expand;
