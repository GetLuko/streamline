/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Reload = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M2.5 8a5.5 5.5 0 0 1 10.4-2.5H9.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v1.92A7 7 0 1 0 8 15c2.354 0 4.58-.885 5.875-2.835a.75.75 0 0 0-1.25-.83C11.681 12.758 9.998 13.5 8 13.5A5.5 5.5 0 0 1 2.5 8Z"
      fill={color}
    />
  </Svg>
);
export default Reload;
