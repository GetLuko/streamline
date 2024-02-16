/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Key = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.707 1.293a1 1 0 0 1 0 1.414l-.793.793.793.793a1 1 0 0 1-1.414 1.414l-.043-.043-.586.586.043.043a1 1 0 0 1-1.414 1.414l-.793-.793-2.92 2.92A3.5 3.5 0 1 1 6.165 8.42l7.127-7.127a1 1 0 0 1 1.414 0ZM6 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill={color}
    />
  </Svg>
);
export default Key;
