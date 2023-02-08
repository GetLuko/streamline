/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowRight = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M14.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L11.586 7H2a1 1 0 0 0 0 2h9.586l-3.293 3.293a1 1 0 1 0 1.414 1.414l5-5Z"
      fill={color}
    />
  </Svg>
);
export default ArrowRight;
