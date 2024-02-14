/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RemoveDocument = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M9 1.497V4a1 1 0 0 0 1 1h.293l-.988.987A1.5 1.5 0 0 1 8 4.5V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10.293l-1.854 1.853a.5.5 0 1 0 .708.707l13-13a.5.5 0 0 0-.708-.707l-2.145 2.145-2.147-2.147A.5.5 0 0 0 9 1.497ZM3.356 14.765l8.759-8.758A1 1 0 0 1 13 7v7a1 1 0 0 1-1 1H4a.996.996 0 0 1-.644-.235Z"
      fill={color}
    />
  </Svg>
);
export default RemoveDocument;
