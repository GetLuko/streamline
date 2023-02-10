/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BellOff = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17.68 4.907a6.998 6.998 0 0 0-4.682-2.836 1 1 0 1 0-1.995 0 6.999 6.999 0 0 0-4.766 2.955C5.046 6.748 4.815 8.88 4.583 11c-.08.73-.16 1.459-.278 2.17l-.139.835a1.984 1.984 0 0 1-1.07 1.448l-.413.206A1.236 1.236 0 0 0 3.236 18h1.35l-3.293 3.293a1 1 0 1 0 1.414 1.414l20-20a1 1 0 0 0-1.414-1.414l-3.614 3.614ZM10.243 18l8.934-8.934c.099.637.17 1.286.24 1.934.08.73.16 1.458.278 2.168l.139.836a1.984 1.984 0 0 0 1.07 1.448l.413.206A1.236 1.236 0 0 1 20.764 18H10.243ZM12 23a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3Z"
      fill={color}
    />
  </Svg>
);
export default BellOff;
