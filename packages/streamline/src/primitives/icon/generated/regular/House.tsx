/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const House = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="m1.196 9.105 10.192-7.891a1 1 0 0 1 1.224 0l10.192 7.89a.5.5 0 0 1-.306.896H21a1 1 0 0 0-1 1v10h-6v-6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6H4V11a1 1 0 0 0-1-1H1.503a.5.5 0 0 1-.307-.895Z"
      fill={color}
    />
  </Svg>
);
export default House;
