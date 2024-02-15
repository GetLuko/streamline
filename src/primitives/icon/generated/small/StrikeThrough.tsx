/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const StrikeThrough = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M4.111 2a.5.5 0 0 0-.5.5v.833a.5.5 0 0 0 .5.5h3.472v2.445h1.834V3.833h3.472a.5.5 0 0 0 .5-.5V2.5a.5.5 0 0 0-.5-.5H4.11ZM14 8.722V7.5H3v1.222h11ZM9.417 9.944V12.5a.5.5 0 0 1-.5.5h-.834a.5.5 0 0 1-.5-.5V9.944h1.834Z"
      fill={color}
    />
  </Svg>
);
export default StrikeThrough;
