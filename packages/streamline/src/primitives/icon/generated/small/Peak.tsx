/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Peak = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M5 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5.575 6.434a2.504 2.504 0 0 0 1.6-1.2l3.825 5.1L13.2 7.4a1 1 0 1 1 1.6 1.2l-3 4a1 1 0 0 1-1.6 0L5.575 6.434ZM2.825 5.233a2.504 2.504 0 0 0 1.6 1.2L2.8 8.6a1 1 0 1 1-1.6-1.2l1.625-2.167Z"
      fill={color}
    />
  </Svg>
);
export default Peak;
