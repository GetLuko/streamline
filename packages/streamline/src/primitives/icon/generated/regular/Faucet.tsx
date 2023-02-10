/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Faucet = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.732 5a2.01 2.01 0 0 1-.732.732V8a1 1 0 0 1 1 1v.416c.75.328 1.405.835 1.91 1.467.495.62 1.188 1.117 1.983 1.117H18a4 4 0 0 1 4 4v2a1 1 0 0 1 1 1v.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V19a1 1 0 0 1 1-1v-1a1 1 0 0 0-1-1h-.107c-.795 0-1.488.496-1.984 1.117A4.99 4.99 0 0 1 11 19a4.99 4.99 0 0 1-3.91-1.883C6.594 16.497 5.902 16 5.107 16H3a1 1 0 0 1-1 1h-.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H2a1 1 0 0 1 1 1h2.107c.795 0 1.487-.496 1.983-1.117A5.016 5.016 0 0 1 9 9.416V9a1 1 0 0 1 1-1V5.732A2.01 2.01 0 0 1 9.268 5H6.732a2 2 0 1 1 0-2h2.536a2 2 0 0 1 3.464 0h2.536A2 2 0 0 1 19 4a2 2 0 0 1-3.732 1h-2.536Z"
      fill={color}
    />
  </Svg>
);
export default Faucet;
