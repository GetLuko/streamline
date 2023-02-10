/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Floppy = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4l-2-2a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 0-1-1Zm4 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill={color}
    />
    <Path d="M9 2.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z" fill={color} />
  </Svg>
);
export default Floppy;
