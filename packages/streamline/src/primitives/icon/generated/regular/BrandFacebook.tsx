/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrandFacebook = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.436 5.297c-2.512 0-4.155 1.523-4.155 4.28V12H7.488v3.18h2.793v7.686C5.023 22.041 1 17.49 1 12 1 5.925 5.925 1 12 1s11 4.925 11 11c0 5.49-4.023 10.041-9.281 10.866V15.18h2.563L16.77 12h-3.051V9.937c0-.87.426-1.718 1.792-1.718h1.387V5.512s-1.258-.215-2.462-.215Z"
      fill="#1778F2"
    />
  </Svg>
);
export default BrandFacebook;
