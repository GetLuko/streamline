/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const LoveLetter = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="m2.236 6.57 8.724-5.283a1.998 1.998 0 0 1 2.07 0l8.724 5.283a.5.5 0 0 1 0 .856l-7.71 4.673L16.141 10A2.929 2.929 0 1 0 12 5.858 2.929 2.929 0 0 0 7.858 10l2.113 2.114-7.735-4.688a.5.5 0 0 1 0-.856Z"
      fill={color}
    />
    <Path
      d="m13.005 14.407 8.233-4.819a.5.5 0 0 1 .753.432v7.978a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10.02a.5.5 0 0 1 .753-.432l8.234 4.819a1.998 1.998 0 0 0 2.019 0Z"
      fill={color}
    />
  </Svg>
);
export default LoveLetter;
