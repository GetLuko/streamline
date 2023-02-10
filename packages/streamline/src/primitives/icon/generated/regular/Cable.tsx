/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Cable = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13 4.5v15a1.5 1.5 0 0 0 3 0V8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1 1 1 0 1 1 2 0 1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v11.5a3.5 3.5 0 1 1-7 0v-15a1.5 1.5 0 0 0-3 0V16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1 1 1 0 1 1-2 0 1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1V4.5a3.5 3.5 0 1 1 7 0Z"
      fill={color}
    />
  </Svg>
);
export default Cable;
