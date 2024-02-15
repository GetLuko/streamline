/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Sensor = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M3.485 3.049A5.985 5.985 0 0 1 8 1c1.801 0 3.416.793 4.517 2.05a.5.5 0 0 0 .752-.658A6.985 6.985 0 0 0 8 0C5.9 0 4.015.926 2.732 2.39a.5.5 0 0 0 .753.659Z"
      fill={color}
    />
    <Path
      d="M8 3a3.99 3.99 0 0 0-3.01 1.365.5.5 0 0 1-.752-.659A4.99 4.99 0 0 1 8 2c1.5 0 2.847.661 3.762 1.707a.5.5 0 1 1-.752.659A3.99 3.99 0 0 0 8 3Z"
      fill={color}
    />
    <Path d="M5 7a3 3 0 0 1 6 0v5a3 3 0 1 1-6 0V7Z" fill={color} />
  </Svg>
);
export default Sensor;
