/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Outbuilding = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m1.196 9.105 10.192-7.891a1 1 0 0 1 1.224 0l10.191 7.89a.5.5 0 0 1-.306.896H21a1 1 0 0 0-1 1v10h-2v-9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v9H4V11a1 1 0 0 0-1-1H1.502a.5.5 0 0 1-.306-.895ZM14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill={color}
    />
  </Svg>
);
export default Outbuilding;
