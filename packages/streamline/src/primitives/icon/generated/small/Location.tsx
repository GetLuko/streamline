/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Location = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.854 2.146a.5.5 0 0 1 .108.546l-5 12a.5.5 0 0 1-.953-.095L6.99 9.405a.5.5 0 0 0-.394-.394l-5.191-1.02a.5.5 0 0 1-.096-.953l12-5a.5.5 0 0 1 .546.108Z"
      fill={color}
    />
  </Svg>
);
export default Location;
