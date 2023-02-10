/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RemoveSensor = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M14.854 1.854a.5.5 0 0 0-.708-.708L11.733 3.56A4.001 4.001 0 0 0 4 5v6c0 .095.003.19.01.283l-2.864 2.863a.5.5 0 0 0 .708.708l13-13ZM4.766 13.355 12 6.121V11a4 4 0 0 1-7.234 2.355Z"
      fill={color}
    />
  </Svg>
);
export default RemoveSensor;
