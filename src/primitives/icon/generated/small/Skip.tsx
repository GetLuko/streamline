/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Skip = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="m8.555 3.17 5.997 4a1 1 0 0 1 0 1.664l-5.998 3.994A1 1 0 0 1 7 11.995V4.002a1 1 0 0 1 1.555-.832ZM4 3a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1Z"
      fill={color}
    />
  </Svg>
);
export default Skip;
