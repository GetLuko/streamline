/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Paint = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.854 1.146a.5.5 0 0 0-.708 0l-.354.355c-1.615.018-3.09.243-4.193.61-.572.191-1.07.43-1.437.718-.36.284-.662.676-.662 1.171s.301.887.662 1.171c.335.264.78.486 1.292.668L1.146 8.146a.5.5 0 0 0 0 .708l6 6a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0 0-.708l-6-6ZM5.409 5.298 8.5 2.208 13.793 7.5l-.927.927c-.364-.092-.615-.26-.866-.427-.375-.25-.75-.5-1.5-.5S9.375 7.75 9 8s-.75.5-1.5.5S6.375 8.25 6 8s-.75-.5-1.5-.5-1.125.25-1.5.5c-.2.133-.398.266-.654.361l2.21-2.21C5.553 6.374 6.738 6.5 8 6.5a.5.5 0 0 0 0-1c-.938 0-1.818-.074-2.59-.202Zm1.339-2.753L4.25 5.043a7.735 7.735 0 0 1-.335-.103c-.513-.171-.893-.364-1.134-.554C2.534 4.19 2.5 4.057 2.5 4c0-.057.034-.191.281-.386.241-.19.62-.383 1.134-.554.75-.25 1.727-.434 2.833-.515Z"
      fill={color}
    />
    <Path
      d="M15 13a1 1 0 0 0 1-1c0-.38-.473-1.91-.768-2.83a.243.243 0 0 0-.464 0C14.473 10.09 14 11.62 14 12a1 1 0 0 0 1 1Z"
      fill={color}
    />
  </Svg>
);
export default Paint;
