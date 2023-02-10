/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Tomb = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M4 5a4 4 0 1 1 8 0v5.67a2.968 2.968 0 0 0-.465-.122A2.497 2.497 0 0 0 8.8 9.599a3 3 0 0 0-4.436.968 2.968 2.968 0 0 0-.364.104V5Z"
      fill={color}
    />
    <Path
      d="M7 10a2 2 0 0 0-1.937 1.501A2 2 0 0 0 3 13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5 2 2 0 0 0-2.085-1.998A1.5 1.5 0 0 0 8.6 10.8 1.997 1.997 0 0 0 7 10Z"
      fill={color}
    />
  </Svg>
);
export default Tomb;
