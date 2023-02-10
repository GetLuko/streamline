/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Pin = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8.32 15.884-.001.001a.498.498 0 0 1-.638 0l-.002-.001-.013-.011a7.305 7.305 0 0 1-.232-.199 21.417 21.417 0 0 1-2.577-2.726C3.46 11.175 2 8.69 2 6a6 6 0 1 1 12 0c0 2.69-1.46 5.175-2.857 6.948a21.425 21.425 0 0 1-2.577 2.726 12.718 12.718 0 0 1-.232.199l-.013.01ZM8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill={color}
    />
  </Svg>
);
export default Pin;
