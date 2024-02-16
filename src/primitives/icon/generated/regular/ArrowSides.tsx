/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowSides = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.94 4.44a1.5 1.5 0 0 0 0 2.12l3.939 3.94H5.12l3.94-3.94a1.5 1.5 0 1 0-2.122-2.12l-6.5 6.5a1.5 1.5 0 0 0 0 2.12l6.5 6.5a1.5 1.5 0 0 0 2.122-2.12L5.12 13.5H18.88l-3.94 3.94a1.5 1.5 0 0 0 2.122 2.12l6.5-6.5a1.5 1.5 0 0 0 0-2.12l-6.5-6.5a1.5 1.5 0 0 0-2.122 0Z"
      fill={color}
    />
  </Svg>
);
export default ArrowSides;
