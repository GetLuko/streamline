/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Filter = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 2a1 1 0 0 0-.812 1.584l6.304 8.756A8 8 0 0 1 10 17.014V23l4-2v-3.986a8 8 0 0 1 1.508-4.674l6.303-8.756A1 1 0 0 0 21 2H3Z"
      fill={color}
    />
  </Svg>
);
export default Filter;
