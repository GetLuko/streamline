/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Login = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 1a2 2 0 0 0-2 2v4.25H1.75a.75.75 0 0 0 0 1.5H5V13a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H7ZM5 8.75h3.44L7.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H5v1.5Z"
      fill={color}
    />
  </Svg>
);
export default Login;
