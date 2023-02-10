/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Italic = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2L8 17H6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2l4-12h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7Z"
      fill={color}
    />
  </Svg>
);
export default Italic;
