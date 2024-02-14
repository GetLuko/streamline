/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ZeroPercent = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6a5 5 0 0 1 10 0v2.158a.611.611 0 0 1-.155.385l-.016.02c-.172.215-.502.209-.712.03a2.5 2.5 0 0 0-.725-.43C10.17 8.08 10 7.88 10 7.642V6c0-.148-.01-.293-.031-.436L7.62 8.851c-.11.126-.209.263-.293.41l-2.201 3.082A2.987 2.987 0 0 0 7 13c.453 0 .882-.1 1.267-.28a.097.097 0 0 1 .086.002c.053.028.07.098.032.145l-.556.696a1.493 1.493 0 0 0-.326.837c-.02.296-.206.6-.503.6a5 5 0 0 1-5-5V6Zm6.873-2.343-4.842 6.778A3.025 3.025 0 0 1 4 10V6a3 3 0 0 1 4.873-2.343Z"
      fill={color}
    />
    <Path
      d="M13.39 9.812a.5.5 0 1 0-.78-.624l-4 5a.5.5 0 0 0 .78.624l4-5Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM14 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      fill={color}
    />
  </Svg>
);
export default ZeroPercent;
