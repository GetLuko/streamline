/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const LoveLetter = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M7.79 1.046a.5.5 0 0 1 .42 0l6.5 3a.5.5 0 0 1 0 .908L8.912 7.63 10.485 6A1.757 1.757 0 1 0 8 3.515 1.757 1.757 0 0 0 5.515 6l1.573 1.63L1.29 4.954a.5.5 0 0 1 0-.908l6.5-3Z"
      fill={color}
    />
    <Path
      d="M1.71 6.296A.5.5 0 0 0 1 6.75v5.252c0 .552.448.998 1 .998h12a1 1 0 0 0 1-1V6.75a.5.5 0 0 0-.71-.454L8.63 8.909a1.5 1.5 0 0 1-1.258 0L1.71 6.296Z"
      fill={color}
    />
  </Svg>
);
export default LoveLetter;
