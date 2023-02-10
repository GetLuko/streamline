/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Cb = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 11.5A3.5 3.5 0 0 1 6.5 8h2a3.5 3.5 0 0 1 3.5 3.5H7.5v1H12A3.5 3.5 0 0 1 8.5 16h-2A3.5 3.5 0 0 1 3 12.5v-1ZM13 8h6.25a1.75 1.75 0 1 1 0 3.5H13V8ZM19.25 12.5H13V16h6.25a1.75 1.75 0 1 0 0-3.5Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6Zm2-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
      fill={color}
    />
  </Svg>
);
export default Cb;
