/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Mastercard = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 12a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4 4.992 4.992 0 0 0-2 4c0 1.636.786 3.088 2 4Z"
      fill="#FF5F00"
    />
    <Path
      d="M8 4a4.992 4.992 0 0 0-2 4c0 1.636.786 3.088 2 4a5 5 0 1 1 0-8Z"
      fill="#EB001B"
    />
    <Path
      d="M8 4c1.214.912 2 2.364 2 4a4.992 4.992 0 0 1-2 4 5 5 0 1 0 0-8Z"
      fill="#F79E1B"
    />
  </Svg>
);
export default Mastercard;
