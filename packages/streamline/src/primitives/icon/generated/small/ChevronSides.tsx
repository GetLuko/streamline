/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const ChevronSides = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)" fill={color}>
      <Path d="M10.293 11.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L13.586 8l-3.293 3.293ZM5.707 4.707a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L2.414 8l3.293-3.293Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ChevronSides;
