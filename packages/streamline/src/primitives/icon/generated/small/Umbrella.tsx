/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Umbrella = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8.5 1.5a.5.5 0 0 0-1 0v.018A7 7 0 0 0 1 8.5C1 7.672 1.895 7 3 7s2 .672 2 1.5c0-.743 1.081-1.36 2.5-1.48V13a1 1 0 1 1-2 0 .5.5 0 0 0-1 0 2 2 0 1 0 4 0V7.02c1.419.12 2.5.737 2.5 1.48 0-.828.895-1.5 2-1.5s2 .672 2 1.5a7 7 0 0 0-6.5-6.982V1.5Z"
      fill={color}
    />
  </Svg>
);
export default Umbrella;
