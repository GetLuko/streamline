/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const Battery50 = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Rect x={2} y={8} width={8.5} height={8} rx={1} fill="#2C2302" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 9a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V9Zm3-2h15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
      fill="#C0BEB8"
    />
    <Path d="M24 12a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2Z" fill="#C0BEB8" />
  </Svg>
);
export default Battery50;
