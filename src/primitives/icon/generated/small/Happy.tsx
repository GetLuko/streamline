/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Happy = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM6 8c.552 0 1-.672 1-1.5S6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8Zm5-1.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5Zm-5.739 3.704C6.1 10.717 7.026 11 8 11s1.901-.283 2.739-.796a.5.5 0 0 1 .522.852C10.281 11.658 9.174 12 8 12s-2.28-.342-3.261-.944a.5.5 0 0 1 .522-.852Z"
      fill={color}
    />
  </Svg>
);
export default Happy;
