/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Write = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="m9.414 8.544 5.18-5.18a1.384 1.384 0 1 0-1.957-1.958l-5.18 5.18a4.153 4.153 0 0 0-1.013 1.65l-.426 1.31a.346.346 0 0 0 .436.436l1.31-.426a4.153 4.153 0 0 0 1.65-1.012Z"
      fill={color}
    />
    <Path
      d="M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-4.5a.75.75 0 0 0-1.5 0v4.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h4.5a.75.75 0 0 0 0-1.5h-4.5Z"
      fill={color}
    />
  </Svg>
);
export default Write;
