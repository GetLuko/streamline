/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrokenHeart = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.89 4.78 13 7l-5 3 4 5-1.903 6.469L2.887 14a6.444 6.444 0 0 1 9.003-9.22Z"
      fill={color}
    />
    <Path
      d="M14.944 3.204 17 8l-6 3 3 4-3.594 6.789.874.906a1 1 0 0 0 1.44 0L21.113 14a6.444 6.444 0 0 0-6.168-10.796Z"
      fill={color}
    />
  </Svg>
);
export default BrokenHeart;
