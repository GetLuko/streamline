/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Qr = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path d="M3 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3ZM2 3.333C2 2.597 2.597 2 3.333 2h1.334C5.403 2 6 2.597 6 3.333v1.334C6 5.403 5.403 6 4.667 6H3.333A1.333 1.333 0 0 1 2 4.667V3.333Z"
      fill={color}
    />
    <Path d="M4 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H3Zm.333 1C2.597 10 2 10.597 2 11.333v1.334C2 13.403 2.597 14 3.333 14h1.334C5.403 14 6 13.403 6 12.667v-1.334C6 10.597 5.403 10 4.667 10H3.333Z"
      fill={color}
    />
    <Path d="M12 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-2Zm.333 1C10.597 2 10 2.597 10 3.333v1.334C10 5.403 10.597 6 11.333 6h1.334C13.403 6 14 5.403 14 4.667V3.333C14 2.597 13.403 2 12.667 2h-1.334Z"
      fill={color}
    />
    <Path
      d="M9 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM9 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM14 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM13 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill={color}
    />
  </Svg>
);
export default Qr;
