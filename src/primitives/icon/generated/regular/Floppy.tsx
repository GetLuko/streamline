/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Floppy = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5l-3-3a1 1 0 0 0-1 1v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V3a1 1 0 0 0-1-1Zm11 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      fill={color}
    />
    <Path
      d="M15 2a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1Z"
      fill={color}
    />
  </Svg>
);
export default Floppy;
