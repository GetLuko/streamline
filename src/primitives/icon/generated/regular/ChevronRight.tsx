/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ChevronRight = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.94 4.44a1.5 1.5 0 0 0 0 2.12L13.378 12l-5.44 5.44a1.5 1.5 0 0 0 2.122 2.12l6.5-6.5a1.5 1.5 0 0 0 0-2.12l-6.5-6.5a1.5 1.5 0 0 0-2.122 0Z"
      fill={color}
    />
  </Svg>
);
export default ChevronRight;
