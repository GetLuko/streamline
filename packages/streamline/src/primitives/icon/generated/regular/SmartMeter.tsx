/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SmartMeter = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm3 1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5Zm4 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
      fill={color}
    />
  </Svg>
);
export default SmartMeter;
