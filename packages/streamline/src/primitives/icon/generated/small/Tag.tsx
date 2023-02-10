/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Tag = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 1a1 1 0 0 0-.707.293l-7 7a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 15 7V2a1 1 0 0 0-1-1H9Zm3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color}
    />
  </Svg>
);
export default Tag;
