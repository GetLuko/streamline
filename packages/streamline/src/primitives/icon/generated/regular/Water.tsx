/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Water = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23a7 7 0 0 0 7-7c0-5.472-4.446-12.13-6.252-14.609a.916.916 0 0 0-1.496 0C9.446 3.87 5 10.528 5 16a7 7 0 0 0 7 7Zm5-7a1 1 0 1 0-2 0 3 3 0 0 1-3 3 1 1 0 1 0 0 2 5 5 0 0 0 5-5Z"
      fill={color}
    />
  </Svg>
);
export default Water;
