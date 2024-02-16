/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Snooze = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.998 2.07a1 1 0 1 0-1.995 0 6.999 6.999 0 0 0-4.766 2.956C5.046 6.748 4.815 8.88 4.583 11c-.08.73-.16 1.459-.278 2.17l-.139.835a1.984 1.984 0 0 1-1.07 1.448l-.413.206A1.236 1.236 0 0 0 3.236 18h17.528a1.236 1.236 0 0 0 .553-2.342l-.413-.206a1.984 1.984 0 0 1-1.07-1.448l-.14-.836c-.118-.71-.197-1.439-.277-2.168-.232-2.121-.464-4.252-1.654-5.974a7 7 0 0 0-4.765-2.955ZM10 7a1 1 0 0 0 0 2h1.92l-2.7 3.375A1 1 0 0 0 10 14h4a1 1 0 1 0 0-2h-1.92l2.7-3.375A1 1 0 0 0 14 7h-4Z"
      fill={color}
    />
    <Path d="M9 20a3 3 0 1 0 6 0H9Z" fill={color} />
  </Svg>
);
export default Snooze;
