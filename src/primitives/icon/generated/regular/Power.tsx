/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Power = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15.99 1.581c.082-.516-.581-.797-.895-.38l-8.994 12a.5.5 0 0 0 .4.799h2.687a1 1 0 0 1 .988 1.159l-1.169 7.26c-.083.515.58.797.894.38l8.998-12a.5.5 0 0 0-.4-.799h-2.69a1 1 0 0 1-.988-1.159l1.168-7.26Z"
      fill={color}
    />
  </Svg>
);
export default Power;
