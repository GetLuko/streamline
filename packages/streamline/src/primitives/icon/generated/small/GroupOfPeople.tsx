/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const GroupOfPeople = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M5 8c1.105 0 2-1.12 2-2.5S6.105 3 5 3 3 4.12 3 5.5 3.895 8 5 8ZM11 8c1.105 0 2-1.12 2-2.5S12.105 3 11 3 9 4.12 9 5.5 9.895 8 11 8ZM11 9c-2.21 0-4 1.343-4 3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1c0-1.657-1.79-3-4-3ZM6 9.095c.567.109.7.807.41 1.307A3.328 3.328 0 0 0 6 12c0 .494-.279 1-.773 1H2a1 1 0 0 1-1-1c0-1.657 1.79-3 4-3 .345 0 .68.033 1 .095Z"
      fill={color}
    />
  </Svg>
);
export default GroupOfPeople;
