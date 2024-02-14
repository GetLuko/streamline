/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Speed25 = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2a8 8 0 0 1 8 8c0 2-3 4-8 4s-8-2-8-4a8 8 0 0 1 8-8ZM2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM13 7.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-8.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM11 5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-3 6a1 1 0 0 0 1-1c0-2.552-.448-6-1-6s-1 3.448-1 6a1 1 0 0 0 1 1Z"
      fill={color}
    />
  </Svg>
);
export default Speed25;
