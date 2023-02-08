/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Wifi4 = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M13.782 6.848c.2.192.515.202.713.009l.355-.346a.486.486 0 0 0 .01-.693A9.754 9.754 0 0 0 8 3a9.754 9.754 0 0 0-6.86 2.818.486.486 0 0 0 .01.693l.355.346a.511.511 0 0 0 .713-.01A8.289 8.289 0 0 1 8 4.5c2.242 0 4.278.893 5.782 2.348Z"
      fill="#2C2302"
    />
    <Path
      d="M8 7.5c1.403 0 2.68.54 3.644 1.427a.525.525 0 0 0 .722.006l.353-.344a.479.479 0 0 0 .008-.689A6.825 6.825 0 0 0 8 6c-1.83 0-3.492.722-4.727 1.9a.479.479 0 0 0 .008.689l.353.344c.2.195.517.183.722-.006A5.36 5.36 0 0 1 8 7.5Z"
      fill="#2C2302"
    />
    <Path
      d="M10.596 9.989c.2.177.187.487-.005.674l-2.25 2.194a.488.488 0 0 1-.683 0l-2.25-2.194c-.19-.187-.204-.497-.004-.674A3.896 3.896 0 0 1 8 9c.994 0 1.902.373 2.596.989Z"
      fill="#2C2302"
    />
  </Svg>
);
export default Wifi4;
