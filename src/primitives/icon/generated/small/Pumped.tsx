/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Pumped = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-3.919-4.54c-.144-.283-.093-.617.18-.779C4.754 9.39 5.819 9 8.003 9c2.183 0 3.249.389 3.742.681.272.162.323.496.18.779C11.15 11.976 9.684 13 8.002 13s-3.149-1.024-3.922-2.54ZM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5ZM10 8c.552 0 1-.672 1-1.5S10.552 5 10 5s-1 .672-1 1.5S9.448 8 10 8Z"
      fill={color}
    />
  </Svg>
);
export default Pumped;
