/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Logout = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.78 7.47a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H11v-1.5h2.44l-1.22-1.22a.75.75 0 0 1 1.06-1.06l2.5 2.5ZM11 7.25V3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V8.75H6.75a.75.75 0 0 1 0-1.5H11Z"
      fill={color}
    />
  </Svg>
);
export default Logout;
