/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path, Rect } from 'react-native-svg';
const Signal3 = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14 8a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1ZM8 12a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-6ZM3 15a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3Z"
      fill="#2C2302"
    />
    <Rect x={18} y={5} width={3} height={14} rx={1} fill="#C0BEB8" />
  </Svg>
);
export default Signal3;
