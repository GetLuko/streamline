/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Equal = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 7.5A1.5 1.5 0 0 1 3.5 6h17a1.5 1.5 0 0 1 0 3h-17A1.5 1.5 0 0 1 2 7.5ZM2 16.5A1.5 1.5 0 0 1 3.5 15h17a1.5 1.5 0 0 1 0 3h-17A1.5 1.5 0 0 1 2 16.5Z"
      fill={color}
    />
  </Svg>
);
export default Equal;
