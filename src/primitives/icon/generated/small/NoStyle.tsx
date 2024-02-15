/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const NoStyle = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.398 2v.002l1.798 1.797h2.1l-.442 1.658 1.42 1.42.821-3.078h3.398a.5.5 0 0 0 .5-.5V2.5a.5.5 0 0 0-.5-.5H4.398Zm4.193 7.438L13.153 14l.847-.847L2.847 2.002 2 2.847l5.17 5.17-1.105 4.147a.5.5 0 0 0 .483.629h.764a.5.5 0 0 0 .483-.371l.796-2.984Z"
      fill={color}
    />
  </Svg>
);
export default NoStyle;
