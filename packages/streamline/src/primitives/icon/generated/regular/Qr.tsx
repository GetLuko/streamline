/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Qr = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M5.5 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm1.111 2C4.497 4 4 4.497 4 5.111V7.89C4 8.503 4.497 9 5.111 9H7.89C8.503 9 9 8.503 9 7.889V5.11C9 4.497 8.503 4 7.889 4H5.11Z"
      fill={color}
    />
    <Path d="M5.5 17.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 13a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4Zm1.111 2C4.497 15 4 15.498 4 16.111v2.778C4 19.503 4.497 20 5.111 20H7.89C8.503 20 9 19.503 9 18.889V16.11C9 15.497 8.503 15 7.889 15H5.11Z"
      fill={color}
    />
    <Path d="M17.5 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V4Zm2 1.111C15 4.497 15.498 4 16.111 4h2.778C19.503 4 20 4.497 20 5.111V7.89C20 8.503 19.503 9 18.889 9H16.11A1.111 1.111 0 0 1 15 7.889V5.11Z"
      fill={color}
    />
    <Path
      d="M14 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM15 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM19 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM20 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM16.5 17.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill={color}
    />
  </Svg>
);
export default Qr;
