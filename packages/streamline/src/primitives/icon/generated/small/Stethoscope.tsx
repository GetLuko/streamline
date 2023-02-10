/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Stethoscope = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 1a1 1 0 0 0-1 1v6a4.002 4.002 0 0 0 2.979 3.868c.293.078.521.329.521.632A2.5 2.5 0 0 0 7 15h4a2.5 2.5 0 0 0 2.5-2.5V4.937a2 2 0 1 0-1 0V12.5A1.5 1.5 0 0 1 11 14H7a1.5 1.5 0 0 1-1.5-1.5c0-.303.228-.554.521-.632A4.002 4.002 0 0 0 9 8V2a1 1 0 0 0-1-1H6.5a.5.5 0 0 0 0 1H8v6a3 3 0 0 1-6 0V2h1.5a.5.5 0 0 0 0-1H2Zm11 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color}
    />
  </Svg>
);
export default Stethoscope;
