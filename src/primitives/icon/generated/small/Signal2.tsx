/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const Signal2 = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Rect x={12} y={3} width={3} height={10} rx={1} fill="#C0BEB8" />
    <Path
      d="M7.5 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1ZM2 9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H2Z"
      fill="#2C2302"
    />
  </Svg>
);
export default Signal2;
