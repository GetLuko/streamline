/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Shopping = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M0 1.5A.5.5 0 0 1 .5 1h2a.5.5 0 0 1 .474.342L3.527 3H14.5a.5.5 0 0 1 .48.637l-2 7a.5.5 0 0 1-.48.363h-7a.5.5 0 0 1-.474-.342L2.14 2H.5a.5.5 0 0 1-.5-.5ZM7 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={color}
    />
  </Svg>
);
export default Shopping;
