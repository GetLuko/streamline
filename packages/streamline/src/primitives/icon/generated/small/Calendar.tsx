/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Calendar = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M5.5 0a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5ZM10.5 0a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5ZM6.5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 4a2 2 0 0 1 2-2v1.5a1.5 1.5 0 1 0 3 0V2h2v1.5a1.5 1.5 0 1 0 3 0V2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm1.5 2v6a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6h-9Z"
      fill={color}
    />
  </Svg>
);
export default Calendar;
