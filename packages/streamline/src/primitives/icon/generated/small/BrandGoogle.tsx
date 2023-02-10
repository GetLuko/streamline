/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const BrandGoogle = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M15.19 8.169c0-.499-.04-1-.127-1.49H8.146v2.824h3.961a3.395 3.395 0 0 1-1.465 2.228v1.832h2.363c1.387-1.277 2.185-3.163 2.185-5.394Z"
        fill="#4285F4"
      />
      <Path
        d="M8.146 15.333c1.978 0 3.646-.649 4.861-1.77l-2.363-1.832c-.657.447-1.506.7-2.495.7-1.913 0-3.535-1.29-4.117-3.025H1.593v1.888a7.334 7.334 0 0 0 6.553 4.04Z"
        fill="#34A853"
      />
      <Path
        d="M4.03 9.405a4.392 4.392 0 0 1 0-2.807V4.709H1.592a7.34 7.34 0 0 0 0 6.585L4.03 9.405Z"
        fill="#FBBC04"
      />
      <Path
        d="M8.146 3.57a3.985 3.985 0 0 1 2.813 1.099l2.094-2.094A7.048 7.048 0 0 0 8.146.667 7.332 7.332 0 0 0 1.593 4.71L4.03 6.598c.58-1.738 2.204-3.029 4.117-3.029Z"
        fill="#EA4335"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BrandGoogle;
