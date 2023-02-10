/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Hook = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 8.744A4.502 4.502 0 0 0 16.5 0 4.5 4.5 0 0 0 15 8.744V17a4 4 0 0 1-8 0v-1h3L4 7v10a7 7 0 1 0 14 0V8.744ZM16.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={color}
    />
  </Svg>
);
export default Hook;
