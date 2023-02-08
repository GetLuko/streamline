/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Card = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M2 3a1 1 0 0 0-1 1v.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V4a1 1 0 0 0-1-1H2Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 6a.5.5 0 0 0-.5.5V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6.5a.5.5 0 0 0-.5-.5h-13Zm9 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z"
      fill={color}
    />
  </Svg>
);
export default Card;
