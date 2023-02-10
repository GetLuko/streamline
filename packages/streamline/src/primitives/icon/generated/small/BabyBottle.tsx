/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BabyBottle = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M9 1c0 .057-.005.112-.014.166A3.001 3.001 0 0 1 11 4h1a1 1 0 1 1 0 2v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2h3.5a.5.5 0 0 0 0-1H4v-1h3.5a.5.5 0 0 0 0-1H4V8h3.5a.5.5 0 0 0 0-1H4V6a1 1 0 0 1 0-2h1c0-1.311.841-2.426 2.014-2.834A1 1 0 1 1 9 1Z"
      fill={color}
    />
  </Svg>
);
export default BabyBottle;
