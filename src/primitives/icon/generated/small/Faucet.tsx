/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Faucet = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M4.915 3a1.5 1.5 0 1 1 0-1h1.17a1.5 1.5 0 0 1 2.83 0h1.17a1.5 1.5 0 1 1 0 1h-1.17c-.151.426-.489.764-.915.915V5a1 1 0 0 1 1 1v.337c.474.225.89.554 1.217.957.323.397.772.706 1.283.706a3.5 3.5 0 0 1 3.5 3.5v.5h.5a.5.5 0 0 1 .5.5v.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.5a.5.5 0 0 1 .5-.5h.5v-.5a.5.5 0 0 0-.5-.5c-.511 0-.96.31-1.283.706A3.493 3.493 0 0 1 7.5 13c-.943 0-1.8-.373-2.429-.98C4.516 11.485 3.845 11 3.073 11H2a1 1 0 0 1-1 1H0V7h1a1 1 0 0 1 1 1h1.073c.772 0 1.443-.485 1.998-1.02.272-.262.585-.48.929-.643V6a1 1 0 0 1 1-1V3.915A1.504 1.504 0 0 1 6.085 3h-1.17Z"
      fill={color}
    />
  </Svg>
);
export default Faucet;
