/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Play = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5 3.358a1.36 1.36 0 0 1 2.041-1.176l15.464 8.95a1 1 0 0 1 0 1.73l-15.464 8.95A1.36 1.36 0 0 1 5 20.635V3.358Z"
      fill={color}
    />
  </Svg>
);
export default Play;
