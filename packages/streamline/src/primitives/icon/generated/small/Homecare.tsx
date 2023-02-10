/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Homecare = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.416 1.182 1.21 6.092a.5.5 0 0 0 .29.908H2a1 1 0 0 1 1 1v5h10V8a1 1 0 0 1 1-1h.497a.5.5 0 0 0 .29-.908l-6.213-4.91a1 1 0 0 0-1.158 0ZM8 6.1A2.05 2.05 0 0 0 5.1 9l2.56 2.366a.5.5 0 0 0 .68 0L10.9 9A2.05 2.05 0 1 0 8 6.1Z"
      fill={color}
    />
  </Svg>
);
export default Homecare;
