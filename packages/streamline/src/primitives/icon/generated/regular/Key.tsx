/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Key = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.44 1.44a1.5 1.5 0 0 1 2.12 2.12L21.122 5l1.44 1.44a1.5 1.5 0 0 1-2.119 2.123.624.624 0 0 0-1.112.392c0 .197.091.373.234.488a1.5 1.5 0 0 1-2.125 2.118L16 10.12l-2.83 2.831a6 6 0 1 1-2.121-2.121l9.39-9.392ZM8 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill={color}
    />
  </Svg>
);
export default Key;
