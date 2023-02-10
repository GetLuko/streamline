/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Loader = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3a5 5 0 0 0-5 5 1 1 0 0 1-2 0 7 7 0 0 1 7-7 1 1 0 0 1 0 2Z"
      fill={color}
    />
  </Svg>
);
export default Loader;
