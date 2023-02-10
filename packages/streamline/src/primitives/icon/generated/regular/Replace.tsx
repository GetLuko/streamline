/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Replace = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9 4.5A1.5 1.5 0 0 1 10.5 3H16a4 4 0 0 1 4 4v3.879l1.44-1.44a1.5 1.5 0 0 1 2.12 2.122l-4 4a1.5 1.5 0 0 1-2.12 0l-4-4a1.5 1.5 0 0 1 2.12-2.122L17 10.88V7a1 1 0 0 0-1-1h-5.5A1.5 1.5 0 0 1 9 4.5ZM6.56 8.44a1.5 1.5 0 0 0-2.12 0l-4 4a1.5 1.5 0 0 0 2.12 2.12L4 13.122V17a4 4 0 0 0 4 4h5.5a1.5 1.5 0 0 0 0-3H8a1 1 0 0 1-1-1v-3.879l1.44 1.44a1.5 1.5 0 0 0 2.12-2.122l-4-4Z"
      fill={color}
    />
  </Svg>
);
export default Replace;
