/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Kangaroo = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 7a6 6 0 1 1 12 0v10a6 6 0 0 1-12 0V7Zm4-.5A1.5 1.5 0 0 1 11.5 5h1A1.5 1.5 0 0 1 14 6.5v1A1.5 1.5 0 0 1 12.5 9h-1A1.5 1.5 0 0 1 10 7.5v-1ZM8 16a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-2Z"
      fill={color}
    />
  </Svg>
);
export default Kangaroo;
