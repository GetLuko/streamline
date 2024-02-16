/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Backpack = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.008 2.183a2 2 0 1 1 3.952.215A5.001 5.001 0 0 1 13 7v2a1 1 0 0 1 1 1v2.5a.5.5 0 0 1-.5.5H13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2h-.5a.5.5 0 0 1-.5-.5V10a1 1 0 0 1 1-1V7a5.001 5.001 0 0 1 3.04-4.601 2.12 2.12 0 0 1-.031-.215Zm.997-.084a5.024 5.024 0 0 1 1.99 0A1 1 0 1 0 7 2v.027l.001.022.002.026.002.024ZM4.5 8a.5.5 0 0 1-.5-.5V7a4 4 0 0 1 8 0v.5a.5.5 0 0 1-.5.5h-7ZM6 9h1v2.5a.5.5 0 1 1-1 0V9Zm4 0H9v2.5a.5.5 0 1 0 1 0V9Z"
      fill={color}
    />
  </Svg>
);
export default Backpack;
