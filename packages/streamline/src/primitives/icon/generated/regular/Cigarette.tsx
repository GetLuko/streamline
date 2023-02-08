/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Cigarette = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19 0a3 3 0 0 1 3 3 2 2 0 0 1 1.95 2.444c-.125.555-.07 1.238.028 1.798a1.5 1.5 0 0 1-2.457 1.394C21.135 8.305 20.51 8 20 8a2 2 0 0 1-1.993-2.168A3.001 3.001 0 0 1 19 0ZM.5 10a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H.5ZM23.5 10a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5ZM22 10.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Z"
      fill={color}
    />
  </Svg>
);
export default Cigarette;
