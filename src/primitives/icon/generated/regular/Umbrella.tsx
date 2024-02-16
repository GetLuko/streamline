/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Umbrella = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6 18.5A3.5 3.5 0 0 0 9.5 22c1.75 0 3.242-1.322 3.5-3v-7.96c2.282.185 4 .992 4 1.96.5-1.5 2-2 3-2 2.5 0 3 .895 3 2 0-5.738-4.393-10.45-10-10.955V2a1 1 0 1 0-2 0v.045C5.394 2.55 1 7.262 1 13c0-1 .5-2 3-2 1 0 2.5.5 3 2 0-.968 1.718-1.775 4-1.96v7.46a1.5 1.5 0 0 1-3 0 1 1 0 1 0-2 0Z"
      fill={color}
    />
  </Svg>
);
export default Umbrella;
