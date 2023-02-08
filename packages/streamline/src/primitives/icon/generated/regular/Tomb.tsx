/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Tomb = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5 8a7 7 0 0 1 14 0v8.207a5.506 5.506 0 0 0-1.669-.204A4.484 4.484 0 0 0 14.5 15c-.677 0-1.319.15-1.895.418A5.485 5.485 0 0 0 10.5 15a5.48 5.48 0 0 0-3.236 1.053A5.54 5.54 0 0 0 5 16.207V8ZM17.5 18a3.5 3.5 0 0 1 3.5 3.5c0 .288-.25.5-.537.5H3.537C3.25 22 3 21.788 3 21.5a3.5 3.5 0 0 1 4.815-3.245A3.493 3.493 0 0 1 10.5 17c.83 0 1.593.29 2.193.772a2.498 2.498 0 0 1 3.892.348c.292-.078.599-.12.915-.12Z"
      fill={color}
    />
  </Svg>
);
export default Tomb;
