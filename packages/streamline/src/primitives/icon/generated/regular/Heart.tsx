/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Heart = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2.887 4.887a6.444 6.444 0 0 1 9.113 0A6.444 6.444 0 0 1 21.113 14l-8.393 8.695a1 1 0 0 1-1.44 0L2.887 14a6.444 6.444 0 0 1 0-9.113Z"
      fill={color}
    />
  </Svg>
);
export default Heart;
