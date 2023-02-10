/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Code = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M9.98 3.196a1 1 0 1 0-1.96-.392l-2 10a1 1 0 0 0 1.96.392l2-10ZM11.293 11.707a1 1 0 0 1 0-1.414L13.586 8l-2.293-2.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0ZM4.707 4.293a1 1 0 0 1 0 1.414L2.414 8l2.293 2.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0Z"
      fill={color}
    />
  </Svg>
);
export default Code;
