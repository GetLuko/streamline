/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Scalpel = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.268 5.268a2.5 2.5 0 0 0-3.536-3.536L.464 20c.411.41.866.746 1.345 1H1.5a.5.5 0 0 0 0 1h9a.5.5 0 1 0 0-1H6.309c.351-.201.686-.456.995-.765l3.467-3.465a2.503 2.503 0 0 1 0-3.54L12 12l1.068 1.06a1 1 0 0 0 1.411-.004l7.789-7.788ZM7.854 16.854a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 .708.708l3-3Z"
      fill={color}
    />
    <Path
      d="M13.5 21a.5.5 0 0 0 0 1h1a.5.5 0 1 0 0-1h-1ZM17 21.5a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5ZM21.5 21a.5.5 0 0 0 0 1h1a.5.5 0 1 0 0-1h-1Z"
      fill={color}
    />
  </Svg>
);
export default Scalpel;
