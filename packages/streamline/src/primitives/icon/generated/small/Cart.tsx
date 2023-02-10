/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Cart = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M1 1.5a.5.5 0 0 1 .5-.5H3a.5.5 0 0 1 .491.408L3.79 3H14.5a.5.5 0 0 1 .447.724l-3 6A.5.5 0 0 1 11.5 10h-7a.5.5 0 0 0 0 1h8a.5.5 0 0 1 0 1h-8a1.5 1.5 0 0 1-.58-2.883L2.584 2H1.5a.5.5 0 0 1-.5-.5ZM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM11 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color}
    />
  </Svg>
);
export default Cart;
