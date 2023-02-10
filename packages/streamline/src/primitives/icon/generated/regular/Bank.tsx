/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bank = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m1.196 9.105 10.192-7.891a1 1 0 0 1 1.224 0l10.192 7.89a.5.5 0 0 1-.306.896H20v1a1 1 0 0 1-1 1v4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v1H2v-1a1 1 0 0 1 1-1v-1a1 1 0 0 1 1-1v-1a1 1 0 0 1 1-1v-4a1 1 0 0 1-1-1v-1H1.503a.5.5 0 0 1-.307-.895ZM17 12v4a1 1 0 0 0-1 1v1h-2v-1a1 1 0 0 0-1-1v-4a1 1 0 0 0 1-1v-1h2v1a1 1 0 0 0 1 1Zm-7-2v1a1 1 0 0 0 1 1v4a1 1 0 0 0-1 1v1H8v-1a1 1 0 0 0-1-1v-4a1 1 0 0 0 1-1v-1h2Zm4-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill={color}
    />
  </Svg>
);
export default Bank;
