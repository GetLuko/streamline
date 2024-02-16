/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ChartPie = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M13.516 7.508a.473.473 0 0 0 .481-.5 6.509 6.509 0 1 0-6.99 6.99c.276.02.501-.206.501-.482V8.009a.5.5 0 0 1 .5-.5h5.508Z"
      fill={color}
    />
    <Path
      d="M14.999 9.01a.473.473 0 0 0-.482-.5H9.01c-.276 0-.5.224-.5.5v5.508c0 .276.224.502.5.48A6.51 6.51 0 0 0 15 9.01Z"
      fill={color}
    />
  </Svg>
);
export default ChartPie;
