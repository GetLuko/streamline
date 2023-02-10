/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Crash = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="m8 0 .994 4.29L12 1.073l-1.285 4.213L14.928 4 11.71 7.006 16 8l-4.29.994L14.927 12l-4.213-1.285L12 14.928 8.994 11.71 8 16l-.994-4.29L4 14.927l1.285-4.213L1.072 12 4.29 8.994 0 8l4.29-.994L1.073 4l4.213 1.285L4 1.072 7.006 4.29 8 0Z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Crash;
