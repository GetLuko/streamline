/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bubble = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 22c6.075 0 11-4.701 11-10.5S18.075 1 12 1 1 5.701 1 11.5c0 2.02.598 3.908 1.634 5.51.529 1.233-.06 3.462-.591 4.994-.199.572.418 1.17.978.942 1.744-.709 4.448-1.662 5.82-1.386 1 .286 2.06.44 3.159.44Z"
      fill={color}
    />
  </Svg>
);
export default Bubble;
