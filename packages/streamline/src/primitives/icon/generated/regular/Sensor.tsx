/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Sensor = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M4.746 5.068A10.17 10.17 0 0 1 12 2.041a10.17 10.17 0 0 1 7.254 3.027 1.02 1.02 0 0 0 1.45-1.435A12.212 12.212 0 0 0 12 0C8.595 0 5.514 1.39 3.295 3.633a1.02 1.02 0 0 0 1.45 1.435Z"
      fill={color}
    />
    <Path
      d="M12 6.034a6.08 6.08 0 0 0-4.271 1.744 1.017 1.017 0 0 1-1.424-1.453A8.114 8.114 0 0 1 12 4c2.217 0 4.228.888 5.695 2.325a1.017 1.017 0 0 1-1.424 1.453A6.08 6.08 0 0 0 12 6.034Z"
      fill={color}
    />
    <Path d="M8 12a4 4 0 1 1 8 0v7a4 4 0 0 1-8 0v-7Z" fill={color} />
  </Svg>
);
export default Sensor;
