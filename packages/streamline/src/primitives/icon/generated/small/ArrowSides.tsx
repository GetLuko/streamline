/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowSides = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M0 8a1 1 0 0 1 .293-.707l4-4a1 1 0 0 1 1.414 1.414L3.414 7h9.172l-2.293-2.293a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 9H3.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4A1 1 0 0 1 0 8Z"
      fill={color}
    />
  </Svg>
);
export default ArrowSides;
