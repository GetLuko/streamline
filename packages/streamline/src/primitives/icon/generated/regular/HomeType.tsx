/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const HomeType = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M11 1a1 1 0 1 1 2 0v22a1 1 0 1 1-2 0V1Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 18.495V23h6V3a2 2 0 0 0-2-2h-4v2h.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v2h.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v2h.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v2.495ZM17 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-2Zm0 7a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2Zm0 5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2Z"
      fill={color}
    />
    <Path
      d="M1.196 11.105 9 5.063V23H4V13a1 1 0 0 0-1-1H1.502a.5.5 0 0 1-.306-.895Z"
      fill={color}
    />
  </Svg>
);
export default HomeType;
