/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Cart = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M1 2a1 1 0 0 1 1-1h2.5a1 1 0 0 1 .975.778L5.753 3H22a1 1 0 0 1 .874 1.486l-5 9A1 1 0 0 1 17 14H7a1 1 0 0 0 0 2h11.5a1 1 0 0 1 0 2H7a3 3 0 0 1-1.196-5.752L3.702 3H2a1 1 0 0 1-1-1ZM9 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill={color}
    />
  </Svg>
);
export default Cart;
