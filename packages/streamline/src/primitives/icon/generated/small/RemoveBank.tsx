/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RemoveBank = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.854 1.854a.5.5 0 0 0-.708-.708L11.133 4.16 8.294 2.096a.5.5 0 0 0-.588 0l-5.5 4A.5.5 0 0 0 2.5 7H4v4.293l-2.854 2.853a.5.5 0 0 0 .708.708l13-13ZM7 8.293V7H6v2.293l1-1ZM8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color}
    />
    <Path
      d="M7 12h-.879l-2 2H14a1 1 0 0 0-1-1 1 1 0 0 0-1-1V7h1.5a.5.5 0 0 0 .294-.904L12.77 5.35 10 8.121V12H9V9.121l-2 2V12Z"
      fill={color}
    />
  </Svg>
);
export default RemoveBank;
