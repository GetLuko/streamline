/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Safe = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M14 12a2 2 0 1 1-3.999.001A2 2 0 0 1 14 12Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm9.668 12.98A3.986 3.986 0 0 1 12 16a3.978 3.978 0 0 1-2.668-1.02l-2.781 1.852a1 1 0 1 1-1.11-1.664l2.782-1.852a4.26 4.26 0 0 1-.188-.778A4 4 0 0 1 11 8.126V5a1.001 1.001 0 0 1 2 0v3.126a4 4 0 0 1 2.777 5.19l2.778 1.851a1 1 0 0 1-1.11 1.664l-2.777-1.85ZM10 18a1.001 1.001 0 0 0 0 2h4a1.001 1.001 0 0 0 0-2h-4Z"
      fill={color}
    />
  </Svg>
);
export default Safe;
