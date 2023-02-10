/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Person = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 10c-3.314 0-6 1.79-6 4a1 1 0 0 0 1 1h9.977c.565 0 1.023-.458 1.023-1.023C13.982 11.78 11.302 10 8 10ZM11.333 4.667C11.333 6.692 9.841 9 8 9 6.159 9 4.667 6.692 4.667 4.667 4.667 2.642 6.159 1 8 1c1.84 0 3.333 1.642 3.333 3.667Z"
      fill={color}
    />
  </Svg>
);
export default Person;
