/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RemoveHouse = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.667 3.626 2.48-2.48a.5.5 0 0 1 .707.708l-13 13a.5.5 0 0 1-.708-.708L3 12.293V8a1 1 0 0 0-1-1h-.499a.5.5 0 0 1-.29-.908l6.205-4.91a1 1 0 0 1 1.158 0l3.093 2.444Z"
      fill={color}
    />
    <Path
      d="m9.446 8.675 3.8-3.8 1.54 1.217a.5.5 0 0 1-.29.908H14a1 1 0 0 0-1 1v5H9.5V9a.999.999 0 0 0-.054-.325ZM5.121 13 6.5 11.621V13H5.121Z"
      fill={color}
    />
  </Svg>
);
export default RemoveHouse;
