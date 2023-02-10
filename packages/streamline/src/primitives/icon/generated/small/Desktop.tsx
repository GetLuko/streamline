/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Desktop = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4.5v1h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-1H13a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm0 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3Z"
      fill={color}
    />
  </Svg>
);
export default Desktop;
