/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Cb = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M4 5.5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1.5a2 2 0 0 0 2-2H4.75v-1H7.5a2 2 0 0 0-2-2H4ZM9 5.5h4a1 1 0 1 1 0 2H9v-2ZM9 8.5h4a1 1 0 1 1 0 2H9v-2Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H2Zm12 1H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"
      fill={color}
    />
  </Svg>
);
export default Cb;
