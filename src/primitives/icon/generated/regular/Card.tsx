/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Card = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M1 6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2 1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 9a1 1 0 0 1 1 1v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8a1 1 0 0 1 1-1h20Zm-4 7a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
      fill={color}
    />
  </Svg>
);
export default Card;
