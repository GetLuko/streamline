/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Reload = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21 2a1 1 0 1 0-2 0v2.859A9.969 9.969 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a1 1 0 1 0-2 0 8 8 0 1 1-1.755-5H14a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V2Z"
      fill={color}
    />
  </Svg>
);
export default Reload;
