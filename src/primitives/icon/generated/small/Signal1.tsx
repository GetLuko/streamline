/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path, Rect } from 'react-native-svg';
const Signal1 = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M13 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-1ZM7.5 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Z"
      fill="#C0BEB8"
    />
    <Rect x={1} y={9} width={3} height={4} rx={1} fill="#2C2302" />
  </Svg>
);
export default Signal1;
