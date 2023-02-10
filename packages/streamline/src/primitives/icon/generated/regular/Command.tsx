/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Command = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 1A4.5 4.5 0 0 1 10 5.5V8h4V5.5a4.5 4.5 0 1 1 4.5 4.5H16v4h2.5a4.5 4.5 0 1 1-4.5 4.5V16h-4v2.5A4.5 4.5 0 1 1 5.5 14H8v-4H5.5a4.5 4.5 0 0 1 0-9ZM14 14v-4h-4v4h4ZM8 5.5A2.5 2.5 0 1 0 5.5 8H8V5.5Zm8 13a2.5 2.5 0 1 0 2.5-2.5H16v2.5Zm5-13A2.5 2.5 0 0 1 18.5 8H16V5.5a2.5 2.5 0 0 1 5 0ZM5.5 16A2.5 2.5 0 1 0 8 18.5V16H5.5Z"
      fill={color}
    />
  </Svg>
);
export default Command;
