/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Podium = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)" fill={color}>
      <Path d="M7.738.162a.293.293 0 0 1 .524 0l.7 1.41a.292.292 0 0 0 .22.16l1.567.226a.29.29 0 0 1 .162.496L9.778 3.552a.29.29 0 0 0-.084.257l.267 1.55a.292.292 0 0 1-.424.307l-1.401-.732a.294.294 0 0 0-.272 0l-1.401.732a.292.292 0 0 1-.424-.306l.267-1.551a.29.29 0 0 0-.084-.257L5.09 2.454a.29.29 0 0 1 .162-.496l1.566-.226a.292.292 0 0 0 .22-.16l.7-1.41Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h4a1 1 0 0 1 1 1v4H0v-5a1 1 0 0 1 1-1h4V8Zm3 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Podium;
