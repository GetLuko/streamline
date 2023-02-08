/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Hourglass = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1 .5.5 0 0 0-.5.5V5a3.99 3.99 0 0 1-1.354 3A3.99 3.99 0 0 1 12 11v2.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1 .5.5 0 0 0 .5-.5V11a3.99 3.99 0 0 1 1.354-3A3.99 3.99 0 0 1 4 5V2.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5ZM10.83 6A3 3 0 1 0 5.17 6H7c.5 0 1 .5 1 .5S8.5 6 9 6h1.83Zm0 4a3.001 3.001 0 0 0-5.66 0H7c.5 0 1-.5 1-.5s.5.5 1 .5h1.83Z"
      fill={color}
    />
  </Svg>
);
export default Hourglass;
