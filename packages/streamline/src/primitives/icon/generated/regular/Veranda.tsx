/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Veranda = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.19 1.108a.5.5 0 0 1 .426-.094l21 5A.5.5 0 0 1 23.5 7H22v14H2V1.5a.5.5 0 0 1 .19-.392ZM4 5.693a1 1 0 0 1 1.232-.973l5 1.191a1 1 0 0 1 .768.973V16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5.693Zm10.232 1.17A1 1 0 0 0 13 7.836V16a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9.026a1 1 0 0 0-.768-.972l-5-1.19Z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Veranda;
