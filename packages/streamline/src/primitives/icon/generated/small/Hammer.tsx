/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Hammer = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M3.136 3.946C3.96 3.034 4.85 2.053 5.94 1.49c1.226-.634 2.68-.734 4.544.198.137.068.209.22.172.366a.332.332 0 0 1-.324.25c-.599 0-1.46.003-2.208.265-.369.13-.696.317-.946.588-.248.267-.437.632-.508 1.14-.058.415.127.84.455 1.202l8.767 7.98a.323.323 0 0 1 .01.47l-2 1.957a.337.337 0 0 1-.48-.01L5.15 7.182a1.01 1.01 0 0 0-.732-.313h-.086A.33.33 0 0 0 4 7.194v.112c0 .433-.176.847-.488 1.153l-.943.922a.339.339 0 0 1-.471 0l-2-1.956a.323.323 0 0 1 0-.461L1.236 5.85c.187-.183.442-.286.707-.286h.39a.33.33 0 0 0 .334-.326v-.402c0-.242.091-.474.255-.654l.21-.232.004-.004Z"
      fill={color}
    />
  </Svg>
);
export default Hammer;
