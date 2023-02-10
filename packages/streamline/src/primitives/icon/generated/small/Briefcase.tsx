/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Briefcase = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.005 2.5a1.5 1.5 0 0 1 1.5-1.5h2.998a1.5 1.5 0 0 1 1.5 1.5V3H13A2 2 0 0 1 15 5v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.005v-.5Zm1 .5h3.998v-.5a.5.5 0 0 0-.5-.5H6.504a.5.5 0 0 0-.5.5V3Z"
      fill={color}
    />
  </Svg>
);
export default Briefcase;
