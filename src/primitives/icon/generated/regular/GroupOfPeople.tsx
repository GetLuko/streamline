/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const GroupOfPeople = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11 8.25C11 10.597 9.433 13 7.5 13S4 10.597 4 8.25 5.567 4 7.5 4 11 5.903 11 8.25ZM9.042 14.15c.474.1.642.681.337 1.058a6.72 6.72 0 0 0-.57.792A5.996 5.996 0 0 0 8 19c0 .514-.332 1-.846 1H2a1 1 0 0 1-1-1c0-2.761 2.91-5 6.5-5 .388 0 .767.026 1.136.076.117.016.258.043.406.074ZM10 19c0-2.761 2.91-5 6.5-5s6.5 2.239 6.5 5a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1ZM16.5 13c1.933 0 3.5-2.403 3.5-4.75S18.433 4 16.5 4 13 5.903 13 8.25 14.567 13 16.5 13Z"
      fill={color}
    />
  </Svg>
);
export default GroupOfPeople;
