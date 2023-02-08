/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Hook = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 3a3.001 3.001 0 0 1-2 2.83v5.67a4.5 4.5 0 1 1-9 0V5l4 6H5v.5a2.5 2.5 0 0 0 5 0V5.83A3.001 3.001 0 1 1 14 3Zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color}
    />
  </Svg>
);
export default Hook;
