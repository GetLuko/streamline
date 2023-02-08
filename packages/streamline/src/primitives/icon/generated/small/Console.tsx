/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Console = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Zm.854 1.146a.5.5 0 1 0-.708.708L4.793 5.5 3.146 7.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2Z"
      fill={color}
    />
  </Svg>
);
export default Console;
