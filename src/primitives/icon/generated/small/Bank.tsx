/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bank = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.294 2.096a.5.5 0 0 0-.588 0l-5.5 4A.5.5 0 0 0 2.5 7H4v5a1 1 0 0 0-1 1 1 1 0 0 0-1 1h12a1 1 0 0 0-1-1 1 1 0 0 0-1-1V7h1.5a.5.5 0 0 0 .294-.904l-5.5-4ZM10 12V7H9v5h1Zm-3 0V7H6v5h1Zm1-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color}
    />
  </Svg>
);
export default Bank;
