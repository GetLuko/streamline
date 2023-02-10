/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Wave = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 17c-2.21 0-4-2.015-4-4.5S14.79 8 17 8a3.63 3.63 0 0 1 1.82.492c.345.198.778.224 1.101-.007.335-.24.463-.685.258-1.042C19.001 5.394 16.676 4 14 4c-3.866 0-6.5 3-7.5 6.5-.683 2.39-1.515 4.5-4 4.5H2a1 1 0 0 0-1 1v2a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2 1 1 0 0 0-1-1h-5Z"
      fill={color}
    />
    <Path
      d="M21 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM20 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill={color}
    />
  </Svg>
);
export default Wave;
