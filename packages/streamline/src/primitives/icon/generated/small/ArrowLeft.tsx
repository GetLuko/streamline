/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowLeft = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M1.293 7.293a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L4.414 9H14a1 1 0 1 0 0-2H4.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5Z"
      fill={color}
    />
  </Svg>
);
export default ArrowLeft;
