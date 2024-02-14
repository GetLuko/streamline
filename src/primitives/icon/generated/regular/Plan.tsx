/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Plan = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h1a1 1 0 0 0 1-1v-4.9c2.282.463 4 2.481 4 4.9a1 1 0 0 0 1 1h7a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5Zm7.93 20H19a2 2 0 0 0 2-2v-2h-6a1 1 0 1 1 0-2h6V5a2 2 0 0 0-2-2h-4v7h2a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2h2V3H5a2 2 0 0 0-2 2v5h3a1 1 0 1 1 0 2H3v7a2 2 0 0 0 2 2v-5a1 1 0 0 1 1-1 7.002 7.002 0 0 1 6.93 6Z"
      fill={color}
    />
  </Svg>
);
export default Plan;
