/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrokenBone = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20 4a3 3 0 1 0-5.803 1.071c.18.47.164 1.033-.192 1.389L10.465 10H12v2h2v1.536l3.54-3.54c.356-.357.918-.373 1.389-.193A3 3 0 1 0 20 4Z"
      fill={color}
    />
    <Path
      d="M13 14.536V13h-2v-2H9.464L6.46 14.005c-.356.356-.918.372-1.389.192A3 3 0 1 0 4 20a3 3 0 1 0 5.803-1.071c-.18-.47-.164-1.033.192-1.389L13 14.536Z"
      fill={color}
    />
  </Svg>
);
export default BrokenBone;
