/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Underline = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 12c3.429 0 4-2.114 4-4.714V2.5a.5.5 0 0 0-.5-.5h-.714a.5.5 0 0 0-.5.5v4.786c0 1.516-.572 2.88-2.286 2.88s-2.286-1.364-2.286-2.88V2.5a.5.5 0 0 0-.5-.5H4.5a.5.5 0 0 0-.5.5v4.786C4 9.886 5.143 12 8 12ZM3.5 14a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z"
      fill={color}
    />
  </Svg>
);
export default Underline;
