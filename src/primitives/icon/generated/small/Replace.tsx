/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Replace = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)" fill={color}>
      <Path d="M11.5 2a2 2 0 0 1 2 2v3.586l.79-.796c.39-.39 1.03-.39 1.42 0 .39.39.39 1.03 0 1.42l-2.503 2.497a1 1 0 0 1-1.414 0L9.29 8.21c-.39-.39-.39-1.03 0-1.42.39-.39 1.03-.39 1.42 0l.79.796V4.5A.5.5 0 0 0 11 4H7a1 1 0 0 1 0-2h4.5ZM4.503 14a2 2 0 0 1-2-2V8.414l-.79.796c-.39.39-1.03.39-1.42 0-.39-.39-.39-1.03 0-1.42l2.503-2.497a1 1 0 0 1 1.414 0L6.713 7.79c.39.39.39 1.03 0 1.42-.39.39-1.03.39-1.42 0l-.79-.796V11.5a.5.5 0 0 0 .5.5h4a1 1 0 1 1 0 2h-4.5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Replace;
