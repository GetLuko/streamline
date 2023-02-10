/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Code = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.97 4.794a1.5 1.5 0 0 0-2.941-.588l-3 15a1.5 1.5 0 0 0 2.942.588l3-15ZM7.497 6.379a1.5 1.5 0 0 1 .124 2.118L4.507 12l3.114 3.504a1.5 1.5 0 0 1-2.242 1.993l-4-4.5a1.5 1.5 0 0 1 0-1.993l4-4.5a1.5 1.5 0 0 1 2.118-.125ZM16.503 6.379a1.5 1.5 0 0 1 2.118.125l4 4.5a1.5 1.5 0 0 1 0 1.993l-4 4.5a1.5 1.5 0 1 1-2.242-1.993L19.493 12 16.38 8.497a1.5 1.5 0 0 1 .124-2.118Z"
      fill={color}
    />
  </Svg>
);
export default Code;
