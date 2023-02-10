/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Plus = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 1a1 1 0 0 0-1 1v5H2a1 1 0 0 0 0 2h5v5a1 1 0 1 0 2 0V9h5a1 1 0 1 0 0-2H9V2a1 1 0 0 0-1-1Z"
      fill={color}
    />
  </Svg>
);
export default Plus;
