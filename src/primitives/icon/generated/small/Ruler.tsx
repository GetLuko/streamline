/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Ruler = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M2 .5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0V3h12v1.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0V2H2V.5ZM1 7a1 1 0 0 1 1-1h.5v1.5a.5.5 0 0 0 1 0V6H5v3.5a.5.5 0 0 0 1 0V6h1.5v1.5a.5.5 0 0 0 1 0V6H10v3.5a.5.5 0 0 0 1 0V6h1.5v1.5a.5.5 0 0 0 1 0V6h.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7Z"
      fill={color}
    />
  </Svg>
);
export default Ruler;
