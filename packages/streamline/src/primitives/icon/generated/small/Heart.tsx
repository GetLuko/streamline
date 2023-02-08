/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Heart = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M2.201 4.201a4.1 4.1 0 0 1 5.799 0A4.1 4.1 0 0 1 13.799 10l-5.12 4.733a1 1 0 0 1-1.358 0L2.201 10a4.1 4.1 0 0 1 0-5.799Z"
      fill={color}
    />
  </Svg>
);
export default Heart;
