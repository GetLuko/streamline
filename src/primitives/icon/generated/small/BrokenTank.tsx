/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrokenTank = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M5.5 4a.5.5 0 0 1-.5-.5.5.5 0 0 0-1 0c0 .276-.226.496-.498.541a3 3 0 0 0 0 5.918c.272.045.498.265.498.541v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 1 .5-.5h2.11l.336-1.347L6.11 6.817l2.322-.928-.71-.473a.5.5 0 0 1 .555-.832l2.291 1.527L7.89 7.183l1.164 1.164L8.64 10h1.86a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 1 0v-1c0-.276.226-.496.498-.541A3 3 0 0 0 12 4H5.5Z"
      fill={color}
    />
    <Path
      d="M8 14a1 1 0 0 0 1-1c0-1-1-2-1-2s-1 1-1 2a1 1 0 0 0 1 1Z"
      fill={color}
    />
  </Svg>
);
export default BrokenTank;
