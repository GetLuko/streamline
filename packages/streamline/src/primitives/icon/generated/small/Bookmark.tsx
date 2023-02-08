/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Bookmark = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M3 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12.503a.5.5 0 0 1-.85.358l-3.8-3.71a.5.5 0 0 0-.7 0l-3.8 3.71a.5.5 0 0 1-.85-.358V3Z"
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
export default Bookmark;
