/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Assistant = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13 4v.16c0 .51.386.931.884 1.038a9.01 9.01 0 0 1 6.996 7.33c.068.412.313.779.557 1.144.282.424.563.845.563 1.328a1 1 0 0 1-1 1h-8v1h4.882c.735 0 1.46.171 2.118.5l.258.13c.488.243 1.026.37 1.571.37H22a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h.17c.546 0 1.084-.127 1.572-.37L4 17.5a4.736 4.736 0 0 1 2.118-.5H11v-1H3a1 1 0 0 1-1-1c0-.483.28-.904.563-1.328.244-.365.49-.732.557-1.143a9.01 9.01 0 0 1 6.996-7.331c.498-.107.884-.529.884-1.039V4a1 1 0 1 1 2 0Z"
      fill={color}
    />
  </Svg>
);
export default Assistant;
