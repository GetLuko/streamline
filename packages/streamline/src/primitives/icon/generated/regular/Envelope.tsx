/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Envelope = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10.96 1.287 2.236 6.57a.5.5 0 0 0 0 .856l8.724 5.286a1.998 1.998 0 0 0 2.071 0l8.723-5.286a.5.5 0 0 0 0-.856L13.03 1.287a1.998 1.998 0 0 0-2.07 0Z"
      fill={color}
    />
    <Path
      d="m21.238 9.588-8.233 4.819a1.998 1.998 0 0 1-2.019 0l-8.234-4.82A.5.5 0 0 0 2 10.02v7.978a2 2 0 0 0 2 2h15.992a2 2 0 0 0 1.999-2v-7.979a.5.5 0 0 0-.753-.431Z"
      fill={color}
    />
  </Svg>
);
export default Envelope;
