/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Tag = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 3a2 2 0 0 0-2-2h-6a2 2 0 0 0-1.351.526l-12 11a2 2 0 0 0-.063 2.888l7 7a2 2 0 0 0 2.828 0l11-11A2 2 0 0 0 23 10V3Zm-5 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill={color}
    />
  </Svg>
);
export default Tag;
