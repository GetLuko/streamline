/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Bill = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.483.134C4.347-.092 4 .004 4 .268v19.96c0 .726.197 1.438.571 2.06l.82 1.366a.71.71 0 0 0 1.218 0l.782-1.303a.71.71 0 0 1 1.218 0l.782 1.303a.71.71 0 0 0 1.218 0l.782-1.303a.71.71 0 0 1 1.218 0l.782 1.303a.71.71 0 0 0 1.218 0l.782-1.303a.71.71 0 0 1 1.218 0l.782 1.303a.71.71 0 0 0 1.218 0l.82-1.366c.374-.622.571-1.336.571-2.061V.269c0-.263-.347-.361-.483-.135l-.908 1.513a.71.71 0 0 1-1.218 0L16.61.344a.71.71 0 0 0-1.218 0l-.782 1.303a.71.71 0 0 1-1.218 0L12.61.344a.71.71 0 0 0-1.218 0l-.782 1.303a.71.71 0 0 1-1.218 0L8.61.344a.71.71 0 0 0-1.218 0L6.61 1.647a.71.71 0 0 1-1.218 0L4.483.134ZM6 8.003a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1Zm1 3a1 1 0 0 0 0 2.001h10a1 1 0 0 0 0-2H7Zm-1 5.003a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1Z"
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
export default Bill;
