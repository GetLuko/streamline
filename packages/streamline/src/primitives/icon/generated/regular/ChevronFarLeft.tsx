/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ChevronFarLeft = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.06 19.56a1.5 1.5 0 0 0 0-2.12L3.622 12l5.44-5.44a1.5 1.5 0 1 0-2.122-2.12l-6.5 6.5a1.5 1.5 0 0 0 0 2.12l6.5 6.5a1.5 1.5 0 0 0 2.122 0Z"
      fill={color}
    />
  </Svg>
);
export default ChevronFarLeft;
