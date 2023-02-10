/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowLeft = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.589 5.532A1.5 1.5 0 1 0 9.41 3.468l-7 7.5a1.5 1.5 0 0 0 0 2.064l7 7.5a1.5 1.5 0 1 0 2.178-2.064L6.987 13.5H20.5a1.5 1.5 0 0 0 0-3H6.987l4.602-4.968Z"
      fill={color}
    />
  </Svg>
);
export default ArrowLeft;
