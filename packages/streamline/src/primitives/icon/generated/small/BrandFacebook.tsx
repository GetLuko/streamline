/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const BrandFacebook = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.624 3.531c-1.675 0-2.77 1.016-2.77 2.853V8H4.992v2.12h1.862v5.124A7.335 7.335 0 0 1 8 .667a7.333 7.333 0 0 1 1.146 14.577V10.12h1.708L11.18 8H9.146V6.624c0-.58.284-1.145 1.195-1.145h.925V3.675s-.84-.144-1.642-.144Z"
        fill="#1778F2"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BrandFacebook;
