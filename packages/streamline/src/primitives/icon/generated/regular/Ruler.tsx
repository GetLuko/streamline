/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Ruler = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 1a1 1 0 0 0-2 0v6a1 1 0 0 0 2 0V5h18v2a1 1 0 1 0 2 0V1a1 1 0 1 0-2 0v2H3V1ZM1 12a2 2 0 0 1 2-2v2a1 1 0 1 0 2 0v-2h2v5a1 1 0 1 0 2 0v-5h2v2a1 1 0 1 0 2 0v-2h2v5a1 1 0 1 0 2 0v-5h2v2a1 1 0 1 0 2 0v-2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8Z"
      fill={color}
    />
  </Svg>
);
export default Ruler;
