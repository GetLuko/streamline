/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Crash = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="m12 1 1.367 5.9L17.5 2.474l-1.767 5.792L21.526 6.5 17.1 10.633 23 12l-5.9 1.367 4.426 4.133-5.793-1.767 1.767 5.793-4.133-4.426L12 23l-1.367-5.9L6.5 21.526l1.766-5.793L2.474 17.5 6.9 13.367 1 12l5.9-1.367L2.474 6.5l5.792 1.766L6.5 2.474 10.633 6.9 12 1Z"
      fill={color}
    />
  </Svg>
);
export default Crash;
