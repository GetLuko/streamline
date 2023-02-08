/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Forward = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5.041 2.182A1.36 1.36 0 0 0 3 3.358v17.277a1.36 1.36 0 0 0 2.041 1.177L18 14.312V20.5a1.5 1.5 0 0 0 3 0v-8.411a1.022 1.022 0 0 0 0-.184V3.5a1.5 1.5 0 0 0-3 0v6.182l-12.959-7.5Z"
      fill={color}
    />
  </Svg>
);
export default Forward;
