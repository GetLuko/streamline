/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const StrikeThrough = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h5.5v4h3V5H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5ZM21 13v-2H3v2h18ZM13.5 15v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-4h3Z"
      fill={color}
    />
  </Svg>
);
export default StrikeThrough;
