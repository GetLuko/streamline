/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Garage = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M7.416 1.185 1.21 6.095a.5.5 0 0 0 .29.908H2a1 1 0 0 1 1 1v6h1v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6h1v-6a1 1 0 0 1 1-1h.497a.5.5 0 0 0 .29-.907L8.573 1.185a1 1 0 0 0-1.158 0Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6H5V8Zm1 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"
      fill={color}
    />
  </Svg>
);
export default Garage;
