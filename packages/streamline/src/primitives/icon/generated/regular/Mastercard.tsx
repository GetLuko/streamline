/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Mastercard = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 17.745A6.992 6.992 0 0 0 15 12a6.992 6.992 0 0 0-3-5.745A6.992 6.992 0 0 0 9 12a6.992 6.992 0 0 0 3 5.745Z"
      fill="#FF5F00"
    />
    <Path
      d="M12 6.255A6.992 6.992 0 0 0 9 12a6.992 6.992 0 0 0 3 5.745 7 7 0 1 1 0-11.49Z"
      fill="#EB001B"
    />
    <Path
      d="M12 6.255A6.992 6.992 0 0 1 15 12a6.992 6.992 0 0 1-3 5.745 7 7 0 1 0 0-11.49Z"
      fill="#F79E1B"
    />
  </Svg>
);
export default Mastercard;
