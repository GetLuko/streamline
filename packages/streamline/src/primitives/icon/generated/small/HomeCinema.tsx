/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const HomeCinema = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path d="M5 12.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2Zm4 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM4.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color}
    />
    <Path d="M13 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1v.293a.707.707 0 0 0 1.207.5L11 14h2l.793.793a.707.707 0 0 0 1.207-.5V14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H9Zm5 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-4-1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      fill={color}
    />
  </Svg>
);
export default HomeCinema;
