/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Check = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.494 4.377a1.5 1.5 0 0 1 .13 2.117l-11.5 13a1.5 1.5 0 0 1-2.23.02l-5.5-6a1.5 1.5 0 1 1 2.212-2.028L8.98 16.26 19.376 4.506a1.5 1.5 0 0 1 2.118-.13Z"
      fill={color}
    />
  </Svg>
);
export default Check;
