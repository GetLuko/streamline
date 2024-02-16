/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrokenHeart = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M7 14.5 6 9l3-2-2.297-3.675A4.102 4.102 0 0 0 2.201 10l5.12 4.733a1 1 0 0 0 1.358 0L13.799 10a4.1 4.1 0 0 0-4.612-6.626L11 7 7.5 9.5l-.5 5Z"
      fill={color}
    />
  </Svg>
);
export default BrokenHeart;
