/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Gift = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M11 4a2 2 0 1 0-2-2v1.5a.5.5 0 0 0 .5.5H11ZM1 6a1 1 0 0 1 1-1h4.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H3a1 1 0 0 1-1-1V7a1 1 0 0 1-1-1ZM9 13.5a.5.5 0 0 0 .5.5H13a1 1 0 0 0 1-1V7a1 1 0 1 0 0-2H9.5a.5.5 0 0 0-.5.5v8ZM3 2a2 2 0 0 0 2 2h1.5a.5.5 0 0 0 .5-.5V2a2 2 0 1 0-4 0Z"
      fill={color}
    />
  </Svg>
);
export default Gift;
