/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Unlocked = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M11 7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V4a2 2 0 1 0-4 0v.5a.5.5 0 0 1-1 0V4a3 3 0 0 1 6 0v3Z"
      fill={color}
    />
  </Svg>
);
export default Unlocked;
