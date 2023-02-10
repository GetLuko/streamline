/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Robot = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 3a.5.5 0 0 1 .5.5V6h6V3.5a.5.5 0 0 1 1 0V6h1a3 3 0 0 1 3 3v1a3 3 0 1 1 0 6v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1a3 3 0 1 1 0-6V9a3 3 0 0 1 3-3h1V3.5a.5.5 0 0 1 .5-.5Zm1.5 7.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5Zm5 1.5c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5.448 1.5 1 1.5Zm-6.435 2.61a.5.5 0 0 1 .703.077A3.493 3.493 0 0 0 12 16c1.105 0 2.09-.512 2.733-1.313a.5.5 0 1 1 .78.626A4.493 4.493 0 0 1 12 17a4.492 4.492 0 0 1-3.513-1.687.5.5 0 0 1 .078-.703Z"
      fill={color}
    />
  </Svg>
);
export default Robot;
