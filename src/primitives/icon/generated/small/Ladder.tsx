/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Ladder = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0V13h8v1.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0V3H4V1.5a.5.5 0 0 0-.5-.5ZM12 12v-2H4v2h8Zm0-3H4V7h8v2Zm0-3V4H4v2h8Z"
      fill={color}
    />
  </Svg>
);
export default Ladder;
