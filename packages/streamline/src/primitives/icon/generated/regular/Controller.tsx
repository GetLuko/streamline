/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Controller = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.224 4h7.552a5.988 5.988 0 0 1 5.738 4.264l1.229 4.1v.003l.003.008 1.108 3.698a2.985 2.985 0 0 1-.031 1.943 2.985 2.985 0 0 1-1.546 1.699 2.986 2.986 0 0 1-2.294.108 2.986 2.986 0 0 1-1.517-1.215L16.728 16H7.272l-1.738 2.608a2.985 2.985 0 0 1-1.517 1.215 2.986 2.986 0 0 1-2.294-.108 2.985 2.985 0 0 1-1.545-1.698 2.986 2.986 0 0 1-.032-1.944l1.111-3.71 1.229-4.099A5.988 5.988 0 0 1 8.224 4ZM7 8a1 1 0 0 1 2 0v1h1a1 1 0 1 1 0 2H9v1a1 1 0 1 1-2 0v-1H6a1 1 0 1 1 0-2h1V8Zm7 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
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
export default Controller;
