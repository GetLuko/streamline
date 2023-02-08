/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Hourglass = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 7a5.994 5.994 0 0 1-2.682 5A5.994 5.994 0 0 1 18 17v3a1 1 0 0 0 1 1 1 1 0 1 1 0 2H5a1 1 0 1 1 0-2 1 1 0 0 0 1-1v-3a5.994 5.994 0 0 1 2.682-5A5.994 5.994 0 0 1 6 7V4a1 1 0 0 0-1-1 1 1 0 0 1 0-2h14a1 1 0 1 1 0 2 1 1 0 0 0-1 1v3Zm-2 0a4.01 4.01 0 0 1-.535 2H13.5c-1 0-1.5 1-1.5 1s-.5-1-1.5-1H8.535A3.975 3.975 0 0 1 8 7V3h8v4Zm-.535 8A3.998 3.998 0 0 0 12 13a3.998 3.998 0 0 0-3.874 3H10.5c1 0 1.5-1 1.5-1s.5 1 1.5 1h2.374a3.976 3.976 0 0 0-.41-1Z"
      fill={color}
    />
  </Svg>
);
export default Hourglass;
