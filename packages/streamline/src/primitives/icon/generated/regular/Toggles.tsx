/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Toggles = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 5h-3.17a3.001 3.001 0 0 0-5.66 0H2a1 1 0 0 0 0 2h11.17a3.001 3.001 0 0 0 5.66 0H22a1 1 0 1 0 0-2Zm-6 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 11a1 1 0 1 0 0 2h3.17a3.001 3.001 0 0 0 5.66 0H22a1 1 0 1 0 0-2H10.83a3.001 3.001 0 0 0-5.66 0H2Zm7 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 17a1 1 0 1 0 0 2h11.17a3.001 3.001 0 0 0 5.66 0H22a1 1 0 1 0 0-2h-3.17a3.001 3.001 0 0 0-5.66 0H2Zm14 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color}
    />
  </Svg>
);
export default Toggles;
