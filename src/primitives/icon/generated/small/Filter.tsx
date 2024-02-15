/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Filter = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M1.978 1h12.038a.98.98 0 0 1 .779 1.574l-5.59 7.34a1 1 0 0 0-.205.607V14l-2 1v-4.472a1 1 0 0 0-.204-.606L1.199 2.574A.98.98 0 0 1 1.98 1Z"
      fill={color}
    />
  </Svg>
);
export default Filter;
