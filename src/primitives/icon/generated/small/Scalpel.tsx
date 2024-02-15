/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Scalpel = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.56 1.44a1.5 1.5 0 0 1 0 2.12L9.059 9.064 8 8l-.94.94a1.5 1.5 0 0 0 0 2.12L4.621 13.5c-.203.203-.428.37-.668.5H8.5a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.227-.946A2.91 2.91 0 0 1 .5 13.5L12.44 1.44a1.5 1.5 0 0 1 2.12 0Zm-9.206 9.206a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0Z"
      fill={color}
    />
    <Path
      d="M11 14.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM15 14.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      fill={color}
    />
  </Svg>
);
export default Scalpel;
