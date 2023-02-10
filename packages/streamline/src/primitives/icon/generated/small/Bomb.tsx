/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Bomb = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.687.11a.214.214 0 0 0-.374 0l-.677 1.224a.214.214 0 0 1-.14.105l-1.33.304a.215.215 0 0 0-.115.348l.516.608c-.1.029-.194.06-.28.096a1.71 1.71 0 0 0-.626.421c-.162.178-.26.373-.323.563a3.417 3.417 0 0 0-.12.532l-.01.063c-.023.144-.044.273-.076.406a1.739 1.739 0 0 1-.292.642l-.572-.573a.5.5 0 0 0-.707 0l-.565.565a5 5 0 1 0 2.724 2.932l.67-.668a.5.5 0 0 0 0-.707l-.837-.837c.314-.382.464-.765.55-1.117a6.14 6.14 0 0 0 .093-.486l.01-.059c.026-.162.048-.278.08-.376a.544.544 0 0 1 .113-.205.722.722 0 0 1 .268-.17c.087-.037.193-.07.324-.1l-.11 1.143a.214.214 0 0 0 .303.216l1.226-.57a.214.214 0 0 1 .18 0l1.226.57c.15.07.319-.05.303-.216l-.138-1.432a.215.215 0 0 1 .05-.16l.918-1.081a.215.215 0 0 0-.116-.348l-1.33-.304a.214.214 0 0 1-.14-.105L13.688.111ZM3 10a3 3 0 0 1 3-3 .5.5 0 0 0 0-1 4 4 0 0 0-4 4 .5.5 0 0 0 1 0Z"
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
export default Bomb;
