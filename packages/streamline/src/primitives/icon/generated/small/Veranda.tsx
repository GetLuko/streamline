/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Veranda = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.605 1.011A.5.5 0 0 0 1 1.5V14h13V5h1.5a.5.5 0 0 0 .105-.989l-14-3Zm7 2.523A.5.5 0 0 0 8 4.023V10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V4.88a.5.5 0 0 0-.395-.489l-4-.857ZM2.5 11a.5.5 0 0 1-.5-.5V2.737a.5.5 0 0 1 .605-.489l4 .857a.5.5 0 0 1 .395.49V10.5a.5.5 0 0 1-.5.5h-4Z"
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
export default Veranda;
