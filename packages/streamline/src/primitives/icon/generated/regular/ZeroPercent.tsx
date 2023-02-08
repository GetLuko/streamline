/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ZeroPercent = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 9a8 8 0 1 1 16 0v4.391a.227.227 0 0 1-.085.175.662.662 0 0 1-.766.06 3.976 3.976 0 0 0-1.65-.595c-.274-.034-.499-.255-.499-.531V9c0-.15-.007-.3-.02-.448L8.252 19.178c.789.52 1.733.822 2.748.822.484 0 1.242-.193 1.66-.31a.532.532 0 0 1 .52.137c.1.1.214.21.299.278.225.183.294.511.126.747l-.14.195c-.233.326-.353.926-.41 1.318a.522.522 0 0 1-.42.448C12.194 22.887 11.46 23 11 23a8 8 0 0 1-8-8V9Zm10.747-4.178L6.02 15.447A5.063 5.063 0 0 1 6 15V9a5 5 0 0 1 7.747-4.178Z"
      fill={color}
    />
    <Path
      d="M20.907 15.79a.5.5 0 0 0-.814-.58l-5 7a.5.5 0 0 0 .814.58l5-7Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM22 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill={color}
    />
  </Svg>
);
export default ZeroPercent;
