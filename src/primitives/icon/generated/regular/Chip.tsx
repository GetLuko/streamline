/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Chip = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 1a.5.5 0 0 1 .5.5V4h2V1.5a.5.5 0 0 1 1 0V4h2V1.5a.5.5 0 0 1 1 0V4h2V1.5a.5.5 0 0 1 1 0V4a3 3 0 0 1 3 3h2.5a.5.5 0 0 1 0 1H20v2h2.5a.5.5 0 0 1 0 1H20v2h2.5a.5.5 0 0 1 0 1H20v2h2.5a.5.5 0 0 1 0 1H20a3 3 0 0 1-3 3v2.5a.5.5 0 0 1-1 0V20h-2v2.5a.5.5 0 0 1-1 0V20h-2v2.5a.5.5 0 0 1-1 0V20H8v2.5a.5.5 0 0 1-1 0V20a3 3 0 0 1-3-3H1.5a.5.5 0 0 1 0-1H4v-2H1.5a.5.5 0 0 1 0-1H4v-2H1.5a.5.5 0 0 1 0-1H4V8H1.5a.5.5 0 0 1 0-1H4a3 3 0 0 1 3-3V1.5a.5.5 0 0 1 .5-.5ZM9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H9Z"
      fill={color}
    />
  </Svg>
);
export default Chip;
