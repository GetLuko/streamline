/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Inbox = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5Zm-1.5 3h-1A1.5 1.5 0 0 0 10 9.5 1.5 1.5 0 0 1 8.5 11h-1A1.5 1.5 0 0 1 6 9.5 1.5 1.5 0 0 0 4.5 8h-1V5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v3Z"
      fill={color}
    />
  </Svg>
);
export default Inbox;
