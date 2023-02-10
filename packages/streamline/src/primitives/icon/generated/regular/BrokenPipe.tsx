/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrokenPipe = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 5a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0h5l1-2-2-2 2-2-1-2 3 2-1 2 3 2-1 2h5a2 2 0 1 0 4 0V7a2 2 0 1 0-4 0H5a2 2 0 0 0-2-2Z"
      fill={color}
    />
  </Svg>
);
export default BrokenPipe;
