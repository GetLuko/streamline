/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrandLinkedin = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.53 7.94c4.617 0 5.47 3.043 5.47 7V23h-4.558v-7.147c0-1.704-.03-3.896-2.369-3.896-2.373 0-2.735 1.857-2.735 3.775V23H8.785V8.305h4.37v2.01h.063c.608-1.157 2.095-2.375 4.313-2.375Zm-11.604.365V23H1.362V8.305h4.564ZM3.646 1a2.646 2.646 0 0 1 2.64 2.648 2.646 2.646 0 0 1-2.64 2.65A2.645 2.645 0 0 1 1 3.647 2.645 2.645 0 0 1 3.645 1Z"
      fill="#fff"
    />
  </Svg>
);
export default BrandLinkedin;
