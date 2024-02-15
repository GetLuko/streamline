/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Window = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4Zm.5 1a.5.5 0 0 0-.5.5V7a.5.5 0 0 0 .5.5H7a.5.5 0 0 0 .5-.5V2.5A.5.5 0 0 0 7 2H4.5Zm4 .5A.5.5 0 0 1 9 2h2.5a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V2.5Zm-4 6A.5.5 0 0 0 4 9v4.5a.5.5 0 0 0 .5.5H7a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5H4.5Zm4.032.325A.499.499 0 0 0 8.5 9v4.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5H9a.5.5 0 0 0-.468.325Z"
      fill={color}
    />
  </Svg>
);
export default Window;
