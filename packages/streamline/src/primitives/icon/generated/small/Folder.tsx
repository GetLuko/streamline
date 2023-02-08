/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Folder = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M6.586 3a1 1 0 0 1 .707.293l.414.414A1 1 0 0 0 8.414 4H12a1 1 0 0 1 1 1H4a1 1 0 0 0-1 1v6a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1h4.586Z"
      fill={color}
    />
    <Path
      d="M4 6.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5V12a1 1 0 0 1-1 1H3.732A1.99 1.99 0 0 0 4 12V6.5Z"
      fill={color}
    />
  </Svg>
);
export default Folder;
