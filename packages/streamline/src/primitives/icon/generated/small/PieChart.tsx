/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PieChart = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M13.5 7.5a.472.472 0 0 0 .481-.5A6.5 6.5 0 1 0 7 13.981c.275.021.5-.205.5-.481V8a.5.5 0 0 1 .5-.5h5.5Z"
      fill={color}
    />
    <Path
      d="M14.981 9a.472.472 0 0 0-.481-.5H9a.5.5 0 0 0-.5.5v5.5c0 .277.225.502.5.481A6.501 6.501 0 0 0 14.981 9Z"
      fill={color}
    />
  </Svg>
);
export default PieChart;
