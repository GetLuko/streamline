/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Expand = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="m8.293 6.293 3.146-3.147-1.293-1.292A.5.5 0 0 1 10.5 1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.854.354L12.854 4.56 9.707 7.707a1 1 0 0 1-1.414-1.414ZM1 14.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .354-.854L4.56 12.854l3.146-3.147a1 1 0 0 0-1.414-1.414l-3.147 3.146-1.292-1.293A.5.5 0 0 0 1 10.5v4Z"
      fill={color}
    />
  </Svg>
);
export default Expand;
