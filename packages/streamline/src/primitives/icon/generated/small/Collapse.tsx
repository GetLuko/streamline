/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Collapse = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="m11.56 5.854 3.147-3.147a1 1 0 0 0-1.414-1.414l-3.147 3.146-1.292-1.293A.5.5 0 0 0 8 3.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .354-.854L11.56 5.854ZM3.5 8a.5.5 0 0 0-.354.854l1.293 1.292-3.146 3.147a1 1 0 1 0 1.414 1.414l3.147-3.146 1.292 1.293A.5.5 0 0 0 8 12.5v-4a.5.5 0 0 0-.5-.5h-4Z"
      fill={color}
    />
  </Svg>
);
export default Collapse;
