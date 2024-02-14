/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bell = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13 2c0 .024 0 .047-.002.07a7 7 0 0 1 4.766 2.956C18.953 6.748 19.184 8.88 19.416 11c.08.73.16 1.458.278 2.168l.139.836a1.984 1.984 0 0 0 1.07 1.448l.413.206A1.236 1.236 0 0 1 20.764 18H3.236a1.236 1.236 0 0 1-.553-2.342l.414-.206a1.984 1.984 0 0 0 1.07-1.448l.138-.836c.119-.71.198-1.439.278-2.168.232-2.121.464-4.252 1.654-5.974a6.999 6.999 0 0 1 4.765-2.955A1 1 0 1 1 13 2ZM12 23a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3Z"
      fill={color}
    />
  </Svg>
);
export default Bell;
