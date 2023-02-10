/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Inbox = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Zm4-2h12a2 2 0 0 1 2 2v6h-3a2 2 0 0 0-2 2 2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2 2 2 0 0 0-2-2H4V6a2 2 0 0 1 2-2Z"
      fill={color}
    />
  </Svg>
);
export default Inbox;
