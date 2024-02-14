/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrokenBone = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M13 3a2 2 0 1 0-3.931.52c.139.518.159 1.131-.22 1.51L8 5.879V8h2.121l.85-.849c.378-.379.99-.359 1.508-.22A2.002 2.002 0 0 0 15 5a2 2 0 0 0-2-2Z"
      fill={color}
    />
    <Path
      d="M9.121 9H7V6.879l-1.97 1.97c-.379.379-.992.359-1.51.22A2.002 2.002 0 0 0 1 11a2 2 0 0 0 2 2 2 2 0 1 0 3.931-.52c-.139-.518-.159-1.131.22-1.51L9.121 9Z"
      fill={color}
    />
  </Svg>
);
export default BrokenBone;
