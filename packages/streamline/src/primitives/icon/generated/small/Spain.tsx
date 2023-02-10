/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
const Spain = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Circle cx={8} cy={8} r={7} fill="#fff" />
    <Path
      d="M13.659 6H2.34A6.002 6.002 0 0 1 13.66 6ZM13.659 10A6.002 6.002 0 0 1 2.34 10H13.66Z"
      fill="#D95762"
    />
    <Path
      d="M13.659 10A5.99 5.99 0 0 0 14 8a5.99 5.99 0 0 0-.341-2H2.34A5.99 5.99 0 0 0 2 8c0 .701.12 1.374.341 2H13.66Z"
      fill="#E9B857"
    />
  </Svg>
);
export default Spain;
