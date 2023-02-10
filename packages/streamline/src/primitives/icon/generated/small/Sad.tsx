/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Sad = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM6 8c.552 0 1-.672 1-1.5S6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8Zm5-1.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5Zm-5.74 5.293A5.22 5.22 0 0 1 8 11a5.22 5.22 0 0 1 2.74.793.5.5 0 1 0 .52-.854A6.22 6.22 0 0 0 8 10a6.22 6.22 0 0 0-3.26.94.5.5 0 1 0 .52.853Z"
      fill={color}
    />
  </Svg>
);
export default Sad;
