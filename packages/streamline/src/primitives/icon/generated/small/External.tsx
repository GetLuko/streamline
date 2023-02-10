/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const External = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M7.809 2.107A.5.5 0 0 0 7 2.5v2.516c-1.166.078-2.129.43-2.915.97-.891.614-1.528 1.452-1.982 2.352C1.203 10.125 1 12.214 1 13.5a.5.5 0 0 0 .974.158c.243-.726 1.574-2.49 5.026-2.647V13.5a.5.5 0 0 0 .809.393l7-5.5a.5.5 0 0 0 0-.786l-7-5.5Z"
      fill={color}
    />
  </Svg>
);
export default External;
