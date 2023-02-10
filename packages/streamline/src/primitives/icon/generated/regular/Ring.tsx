/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Ring = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.497 1a1 1 0 0 0-.797.397L7.203 3.375a1 1 0 0 0 .02 1.233l1.76 2.171A2.992 2.992 0 0 0 8 9v1.255a7 7 0 1 0 8 0V9c0-.88-.38-1.672-.983-2.221l1.76-2.17a1 1 0 0 0 .02-1.234L15.3 1.397A1 1 0 0 0 14.502 1H9.497Zm.752 7.34A.996.996 0 0 0 10 9v.29c.28-.083.566-.15.859-.197l-.61-.753Zm2.892.752.61-.752A.996.996 0 0 1 14 9v.29a6.958 6.958 0 0 0-.86-.197ZM12 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      fill={color}
    />
  </Svg>
);
export default Ring;
