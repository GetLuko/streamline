/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Location = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.932 4.362a1 1 0 0 0-1.294-1.294l-18 7a1 1 0 0 0 .24 1.925l8.243 1.016a1 1 0 0 1 .87.87l1.014 8.223a1.004 1.004 0 0 0 .844.887.997.997 0 0 0 1.09-.645l6.993-17.982Z"
      fill={color}
    />
  </Svg>
);
export default Location;
