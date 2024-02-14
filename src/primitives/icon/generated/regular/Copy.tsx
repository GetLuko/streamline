/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Copy = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11 2a3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1 1 1 0 1 0 0 2 3 3 0 0 0 3-3V5a3 3 0 0 0-3-3h-8Z"
      fill={color}
    />
    <Path
      d="M2 10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10Z"
      fill={color}
    />
  </Svg>
);
export default Copy;
