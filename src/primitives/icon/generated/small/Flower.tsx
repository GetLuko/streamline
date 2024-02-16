/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Flower = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.9 3.1a2.1 2.1 0 1 1 4.2 0v.1l.015-.015a2.1 2.1 0 0 1 3.162 2.749A2.1 2.1 0 0 1 12.9 10.1h-.005a2.1 2.1 0 0 1-2.815 3.088 2.1 2.1 0 0 1-4.146.089 2.1 2.1 0 0 1-2.75-3.162L3.2 10.1H3.1a2.1 2.1 0 0 1-.307-4.178 2.1 2.1 0 0 1 3.092-2.837L5.9 3.1ZM8 10.8a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z"
      fill={color}
    />
  </Svg>
);
export default Flower;
