/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowDown = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5.532 12.411a1.5 1.5 0 1 0-2.064 2.178l7.5 7a1.5 1.5 0 0 0 2.064 0l7.5-7a1.5 1.5 0 1 0-2.064-2.178L13.5 17.013V3.5a1.5 1.5 0 0 0-3 0v13.513L5.532 12.41Z"
      fill={color}
    />
  </Svg>
);
export default ArrowDown;
