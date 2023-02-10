/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Safe = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm2 6a2 2 0 0 1 1.5-1.937V3.5a.5.5 0 0 1 1 0v2.563a2 2 0 0 1 1.367 2.656l1.924 1.374a.5.5 0 0 1-.582.814L9.286 9.532A1.992 1.992 0 0 1 8 10c-.49 0-.938-.176-1.285-.468L4.79 10.907a.5.5 0 1 1-.582-.814L6.133 8.72A1.995 1.995 0 0 1 6 8Zm.5 4a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"
      fill={color}
    />
  </Svg>
);
export default Safe;
