/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Rewind = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M13.5 8A5.5 5.5 0 0 0 3.1 5.5h3.15a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 1 6.25v-4.5a.75.75 0 0 1 1.5 0v1.92A7 7 0 1 1 8 15c-2.353 0-4.58-.885-5.875-2.835a.75.75 0 0 1 1.25-.83C4.319 12.758 6.002 13.5 8 13.5A5.5 5.5 0 0 0 13.5 8Z"
      fill={color}
    />
  </Svg>
);
export default Rewind;
