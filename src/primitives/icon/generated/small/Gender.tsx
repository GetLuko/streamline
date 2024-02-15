/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Gender = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 .75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V2.56l-2.191 2.192a4.001 4.001 0 0 1-2.562 6.179.758.758 0 0 1 .003.069v1.25h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5V11c0-.024.001-.047.003-.07a4.001 4.001 0 1 1 2.995-7.239L12.44 1.5H10.75A.75.75 0 0 1 10 .75ZM10.5 7a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      fill={color}
    />
  </Svg>
);
export default Gender;
