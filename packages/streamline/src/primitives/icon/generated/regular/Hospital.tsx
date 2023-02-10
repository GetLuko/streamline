/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Hospital = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 3a1 1 0 0 0-1 1v9c0 .578.245 1.098.637 1.463L4.8 17.4a2 2 0 1 0 2.864.49l1.563-1.041a5 5 0 0 1 5.546 0l1.563 1.041a2 2 0 1 0 2.864-.49l3.163-2.937c.392-.365.637-.885.637-1.463V7a1 1 0 1 0-2 0v2H9.861a2 2 0 0 1-1.505-.683L5.753 5.341a1 1 0 1 0-1.506 1.317l2.604 2.976A4 4 0 0 0 9.861 11H4a1 1 0 0 1-1-1V4a1 1 0 0 0-1-1Z"
      fill={color}
    />
  </Svg>
);
export default Hospital;
