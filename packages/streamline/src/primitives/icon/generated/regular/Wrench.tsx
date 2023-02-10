/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Wrench = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m15.842 7.526-.647-1.94a1 1 0 0 1 .242-1.023l2.126-2.126c.534-.534.292-1.424-.464-1.436L17 1a6 6 0 0 0-5.625 8.09l-9.642 9.642a2.5 2.5 0 0 0 3.536 3.536l9.642-9.642A6 6 0 0 0 23 6.9c-.013-.756-.903-.998-1.437-.464l-2.126 2.126a1 1 0 0 1-1.023.242l-1.94-.647a1 1 0 0 1-.632-.632ZM4 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color}
    />
  </Svg>
);
export default Wrench;
