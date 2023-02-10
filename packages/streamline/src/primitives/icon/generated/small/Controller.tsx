/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Controller = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.261 4a4 4 0 0 0-3.837 2.871L.092 11.398a1.985 1.985 0 0 0 .057 1.36 1.993 1.993 0 0 0 1.743 1.24 1.992 1.992 0 0 0 1.586-.65c.112-.122.21-.26.29-.411L4.844 11h6.312l1.076 1.937a1.985 1.985 0 0 0 1.01.914 1.992 1.992 0 0 0 2.106-.373 1.993 1.993 0 0 0 .65-1.585 1.984 1.984 0 0 0-.091-.495L14.576 6.87A4 4 0 0 0 10.738 4H5.261ZM5.5 6a.5.5 0 0 0-.5.5V7h-.5a.5.5 0 0 0 0 1H5v.5a.5.5 0 0 0 1 0V8h.5a.5.5 0 0 0 0-1H6v-.5a.5.5 0 0 0-.5-.5Zm5.5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1-1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
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
export default Controller;
