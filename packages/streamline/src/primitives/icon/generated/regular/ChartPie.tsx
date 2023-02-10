/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ChartPie = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19.315 5.444a10 10 0 0 1 1.635 4.558c.055.55-.398.998-.95.998h-8a1 1 0 0 0-1 1v8c0 .552-.449 1.005-.998.95a10 10 0 1 1 9.313-15.506Z"
      fill={color}
    />
    <Path
      d="M16.827 22.239a10 10 0 0 1-2.829.711c-.55.055-.998-.398-.998-.95v-8a1 1 0 0 1 1-1h8c.552 0 1.005.449.95.998a10 10 0 0 1-6.123 8.24Z"
      fill={color}
    />
  </Svg>
);
export default ChartPie;
