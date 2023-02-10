/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrokenTank = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8 4a1 1 0 0 0-2 0c0 .552-.452.99-.994 1.099a5.002 5.002 0 0 0 0 9.802c.542.11.994.547.994 1.099v1a1 1 0 1 0 2 0v-1a1 1 0 0 1 1-1h2.306l-.378-1.135.964-.964-.247-.492-.94-.314-.789 1.182a.5.5 0 0 1-.832-.554l1.212-1.818 1.569.523 1.281-1.282a.5.5 0 0 1 .708.708l-1.246 1.245.5 1-1.036 1.036.288.865H15a1 1 0 0 1 1 1v1a1 1 0 1 0 2 0v-1c0-.552.452-.99.994-1.099A5.002 5.002 0 0 0 18 5H9a1 1 0 0 1-1-1Z"
      fill={color}
    />
    <Path d="M14 21a2 2 0 1 1-4 0c0-2 2-4 2-4s2 2 2 4Z" fill={color} />
  </Svg>
);
export default BrokenTank;
