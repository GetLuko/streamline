/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ChevronUp = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.44 16.06a1.5 1.5 0 0 0 2.12 0L12 10.622l5.44 5.44a1.5 1.5 0 0 0 2.12-2.122l-6.5-6.5a1.5 1.5 0 0 0-2.12 0l-6.5 6.5a1.5 1.5 0 0 0 0 2.122Z"
      fill={color}
    />
  </Svg>
);
export default ChevronUp;
