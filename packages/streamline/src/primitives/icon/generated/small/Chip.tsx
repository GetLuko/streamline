/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Chip = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 1.5a.5.5 0 0 0-1 0V3a2 2 0 0 0-2 2H1.5a.5.5 0 0 0 0 1H3v1.5H1.5a.5.5 0 0 0 0 1H3V10H1.5a.5.5 0 0 0 0 1H3a2 2 0 0 0 2 2v1.5a.5.5 0 0 0 1 0V13h1.5v1.5a.5.5 0 0 0 1 0V13H10v1.5a.5.5 0 0 0 1 0V13a2 2 0 0 0 2-2h1.5a.5.5 0 0 0 0-1H13V8.5h1.5a.5.5 0 0 0 0-1H13V6h1.5a.5.5 0 0 0 0-1H13a2 2 0 0 0-2-2V1.5a.5.5 0 0 0-1 0V3H8.5V1.5a.5.5 0 0 0-1 0V3H6V1.5ZM6 5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Z"
      fill={color}
    />
  </Svg>
);
export default Chip;
