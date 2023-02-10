/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Tooth = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 9c-.56 0-1.006.467-1.002 1.027.002.155.002.313.002.473 0 2.485-.12 4.5-1.5 4.5S3 12.985 3 10.5c0-.384.027-.756.077-1.112.116-.825-.139-1.682-.552-2.406a4 4 0 0 1 4.955-5.7 1.41 1.41 0 0 0 1.04 0 4 4 0 0 1 4.955 5.7c-.413.724-.668 1.58-.552 2.406.05.356.077.728.077 1.112 0 2.485-1.12 4.5-2.5 4.5S9 12.985 9 10.5c0-.16 0-.318.002-.473A1.012 1.012 0 0 0 8 9Z"
      fill={color}
    />
  </Svg>
);
export default Tooth;
