/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bear = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path d="M7.5 11a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 5.5c0 .993.414 1.89 1.078 2.527a6 6 0 1 0 11.843 0 3.5 3.5 0 1 0-4.949-4.949 6.042 6.042 0 0 0-1.945 0A3.5 3.5 0 0 0 1 5.5ZM4.5 4A1.5 1.5 0 0 0 3 5.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 4.5 3a.5.5 0 0 1 0 1ZM13 5.5A1.5 1.5 0 0 0 11.5 4a.5.5 0 0 1 0-1A2.5 2.5 0 0 1 14 5.5a.5.5 0 0 1-1 0Zm-6 2C7 8.328 6.552 9 6 9s-1-.672-1-1.5S5.448 6 6 6s1 .672 1 1.5ZM10 9c.552 0 1-.672 1-1.5S10.552 6 10 6s-1 .672-1 1.5S9.448 9 10 9Zm1 3c0 1-1.343 1.5-3 1.5S5 13 5 12s1.343-2 3-2 3 1 3 2Z"
      fill={color}
    />
  </Svg>
);
export default Bear;
