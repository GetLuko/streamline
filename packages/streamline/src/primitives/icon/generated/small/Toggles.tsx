/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Toggles = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.937 3.5H14.5a.5.5 0 0 1 0 1h-1.563a2 2 0 0 1-3.874 0H1.5a.5.5 0 0 1 0-1h7.563a2 2 0 0 1 3.874 0ZM11 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM1.5 7.5a.5.5 0 0 0 0 1h1.563a2 2 0 0 0 3.874 0H14.5a.5.5 0 0 0 0-1H6.937a2 2 0 0 0-3.874 0H1.5ZM6 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM1.5 11.5a.5.5 0 0 0 0 1h7.563a2 2 0 0 0 3.874 0H14.5a.5.5 0 0 0 0-1h-1.563a2 2 0 0 0-3.874 0H1.5ZM11 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color}
    />
  </Svg>
);
export default Toggles;
