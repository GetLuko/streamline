/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Shield = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M4.002 4.9c-.001-.512.383-.945.886-1.038 1.421-.262 4.26-.961 6.362-2.601a1.231 1.231 0 0 1 1.5 0C14.85 2.9 17.69 3.6 19.112 3.862c.503.093.887.526.886 1.038-.005 2.359-.01 6.5.002 7.1 0 8.592-8 11-8 11s-8-2.408-8-11c.012-.586.006-4.737.002-7.1Z"
      fill={color}
    />
  </Svg>
);
export default Shield;
