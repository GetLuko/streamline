/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Paw = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M7 2.5C7 3.328 6.328 5 5.5 5S4 3.328 4 2.5a1.5 1.5 0 1 1 3 0ZM4 6.5C4 7.328 3.328 9 2.5 9S1 7.328 1 6.5a1.5 1.5 0 1 1 3 0ZM10.5 5c.828 0 1.5-1.672 1.5-2.5a1.5 1.5 0 0 0-3 0c0 .828.672 2.5 1.5 2.5ZM15 6.5c0 .828-.672 2.5-1.5 2.5S12 7.328 12 6.5a1.5 1.5 0 0 1 3 0ZM11 8c0 .1.06.191.153.23a3 3 0 1 1-2.408 5.496 1.815 1.815 0 0 0-1.49 0A3 3 0 1 1 4.847 8.23.25.25 0 0 0 5 8a3 3 0 0 1 6 0Z"
      fill={color}
    />
  </Svg>
);
export default Paw;
