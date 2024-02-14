/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Underline = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 11.286C19 15.54 18 19 12 19c-5 0-7-3.459-7-7.714V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8.286C8 13.767 9 16 12 16s4-2.233 4-4.714V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8.286ZM20 24v-2H4v2h16Z"
      fill={color}
    />
  </Svg>
);
export default Underline;
