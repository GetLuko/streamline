/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Upload = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8.75 12a1 1 0 0 0 1 1H11a4 4 0 0 0 .247-7.992 4.5 4.5 0 0 0-8.235 2.159A3.001 3.001 0 0 0 4 13h2.25a1 1 0 0 0 1-1V9.56l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06L8.75 9.56V12Z"
      fill={color}
    />
  </Svg>
);
export default Upload;
