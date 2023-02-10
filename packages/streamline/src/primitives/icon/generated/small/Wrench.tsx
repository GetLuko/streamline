/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Wrench = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m10.445 5.153-.412-1.234a.636.636 0 0 1 .154-.652l1.353-1.352c.34-.34.186-.907-.295-.914L11.182 1a3.818 3.818 0 0 0-3.58 5.148l-6.136 6.136a1.59 1.59 0 0 0 2.25 2.25l6.136-6.136A3.818 3.818 0 0 0 15 4.755c-.008-.48-.575-.635-.915-.295l-1.352 1.353a.636.636 0 0 1-.652.154l-1.234-.412a.637.637 0 0 1-.402-.402ZM3 13.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      fill={color}
    />
  </Svg>
);
export default Wrench;
