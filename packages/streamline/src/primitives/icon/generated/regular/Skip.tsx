/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Skip = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5.5 4A1.5 1.5 0 0 0 4 5.5v13a1.5 1.5 0 0 0 3 0v-13A1.5 1.5 0 0 0 5.5 4ZM12.378 4.287l8.998 6.497a1.5 1.5 0 0 1 0 2.432l-8.998 6.497c-.992.716-2.378.007-2.378-1.216V5.503c0-1.223 1.386-1.932 2.378-1.216Z"
      fill={color}
    />
  </Svg>
);
export default Skip;
