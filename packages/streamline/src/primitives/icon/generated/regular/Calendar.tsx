/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Calendar = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8 0a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1ZM8 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 3h2v2a3 3 0 1 0 6 0V3a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3v2a3 3 0 0 0 6 0V3Zm-7 7h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10Z"
      fill={color}
    />
    <Path d="M15 1a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V1Z" fill={color} />
  </Svg>
);
export default Calendar;
