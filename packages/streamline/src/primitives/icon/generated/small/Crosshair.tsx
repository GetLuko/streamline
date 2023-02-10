/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Crosshair = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 1h1v1.02a6.001 6.001 0 0 1 5.48 5.48H15v1h-1.02a6.002 6.002 0 0 1-5.48 5.48V15h-1v-1.02A6.001 6.001 0 0 1 2.02 8.5H1v-1h1.02A6.001 6.001 0 0 1 7.5 2.02V1ZM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0Z"
      fill={color}
    />
  </Svg>
);
export default Crosshair;
