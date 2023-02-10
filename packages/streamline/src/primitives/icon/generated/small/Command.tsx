/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Command = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 7a3 3 0 1 1 3-3v1.5h2V4a3 3 0 1 1 3 3h-1.5v2H12a3 3 0 1 1-3 3v-1.5H7V12a3 3 0 1 1-3-3h1.5V7H4ZM2.5 4A1.5 1.5 0 0 0 4 5.5h1.5V4a1.5 1.5 0 1 0-3 0ZM9 9V7H7v2h2Zm4.5-5A1.5 1.5 0 0 1 12 5.5h-1.5V4a1.5 1.5 0 0 1 3 0ZM12 10.5a1.5 1.5 0 1 1-1.5 1.5v-1.5H12ZM2.5 12A1.5 1.5 0 0 1 4 10.5h1.5V12a1.5 1.5 0 0 1-3 0Z"
      fill={color}
    />
  </Svg>
);
export default Command;
