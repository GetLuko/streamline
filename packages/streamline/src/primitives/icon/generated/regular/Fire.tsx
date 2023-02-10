/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Fire = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13 1s-2.172 3.718 2.746 6.863c.236.15.462.305.68.465A8 8 0 1 1 4.923 18.727h-.005C4.402 17.779 4 15.922 4 14.993v-.072C4 13.908 3.86 11.205 6 9c-.054 2.085.5 3 2 4-1.17-5.116.222-9.348 5-12Z"
      fill={color}
    />
  </Svg>
);
export default Fire;
