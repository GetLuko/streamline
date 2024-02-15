/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Cross = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M3.707 2.293a1 1 0 0 0-1.414 1.414L6.586 8l-4.293 4.293a1 1 0 1 0 1.414 1.414L8 9.414l4.293 4.293a1 1 0 0 0 1.414-1.414L9.414 8l4.293-4.293a1 1 0 0 0-1.414-1.414L8 6.586 3.707 2.293Z"
      fill={color}
    />
  </Svg>
);
export default Cross;
