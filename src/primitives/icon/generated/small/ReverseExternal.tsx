/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ReverseExternal = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8.191 2.107A.5.5 0 0 1 9 2.5v2.516c1.166.078 2.129.43 2.915.97.891.614 1.529 1.452 1.982 2.352.9 1.787 1.103 3.876 1.103 5.162a.5.5 0 0 1-.974.158c-.242-.726-1.574-2.49-5.026-2.647V13.5a.5.5 0 0 1-.809.393l-7-5.5a.5.5 0 0 1 0-.786l7-5.5Z"
      fill={color}
    />
  </Svg>
);
export default ReverseExternal;
