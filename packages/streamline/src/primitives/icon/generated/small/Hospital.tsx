/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Hospital = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M2 2.5a.5.5 0 0 0-1 0v5.86a2 2 0 0 0 .373 1.162l1.255 1.757a1.5 1.5 0 1 0 2.056.3l.983-.764a3.8 3.8 0 0 1 4.666 0l.983.764a1.5 1.5 0 1 0 2.056-.3l1.255-1.757A2 2 0 0 0 15 8.359V4.5a.5.5 0 0 0-1 0V6H6.937a1.5 1.5 0 0 1-1.153-.54l-1.9-2.28a.5.5 0 1 0-.768.64l1.9 2.28A2.5 2.5 0 0 0 6.93 7H2.5a.5.5 0 0 1-.5-.5v-4Z"
      fill={color}
    />
  </Svg>
);
export default Hospital;
