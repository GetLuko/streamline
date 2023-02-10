/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Wave = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M4 7.5C3.487 8.782 2.88 10 1.5 10h-.071a.429.429 0 0 0-.429.429V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.5a.5.5 0 0 0-.5-.5h-3.287c-1.057 0-2.107-.563-2.197-1.616A4.526 4.526 0 0 1 9 9c0-1.657.895-3 2-3 .298 0 .582.098.836.274.362.25.825.396 1.218.199.403-.202.6-.679.372-1.068C12.59 3.975 10.921 3 9 3 6.239 3 5 5 4 7.5Z"
      fill={color}
    />
    <Path d="M14 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" fill={color} />
  </Svg>
);
export default Wave;
