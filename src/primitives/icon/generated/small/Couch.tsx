/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Couch = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="m2.556 6.033.485-2.586A3 3 0 0 1 5.99 1h4.02a3 3 0 0 1 2.949 2.447l.485 2.586a3 3 0 0 0-3.076 1.528 1.404 1.404 0 0 1-.29.382.303.303 0 0 1-.084.057H6.006a.301.301 0 0 1-.085-.057 1.403 1.403 0 0 1-.288-.382 3 3 0 0 0-3.077-1.528Z"
      fill={color}
    />
    <Path
      d="M13.645 7.106a2 2 0 0 0-2.4.935C10.979 8.525 10.552 9 10 9H6c-.552 0-.98-.475-1.244-.959A2.002 2.002 0 0 0 1 9c0 .644.305 1.218.778 1.583A.537.537 0 0 1 2 11c0 1.306.835 2.418 2 2.83v.67a.5.5 0 0 0 1 0V14h6v.5a.5.5 0 0 0 1 0v-.67A3.001 3.001 0 0 0 14 11c0-.166.091-.315.222-.417a2 2 0 0 0-.577-3.477Z"
      fill={color}
    />
  </Svg>
);
export default Couch;
