/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bike = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-.461l.444 1h4.812l-.445-1H14a1 1 0 1 1 0-2h1a1 1 0 0 1 .914.594l2.427 5.46a4 4 0 1 1-1.827.813l-.49-1.1-3.192 4.788A1 1 0 0 1 12 16H8.874A4.002 4.002 0 0 1 1 15a4 4 0 0 1 5.317-3.778l1.746-2.619L7.35 7H7a1 1 0 0 1-1-1Zm11.383 7.823a2 2 0 1 0 1.828-.812l.703 1.583a1 1 0 1 1-1.828.812l-.703-1.583Zm-8.359-3.056L7.98 12.332c.42.47.732 1.039.894 1.668h1.587l-1.437-3.233Zm3.152 2.166L10.872 10h3.26l-1.956 2.933Zm-8.008 1.512.96-1.44A2 2 0 1 0 6.733 16H5a1 1 0 0 1-.832-1.556Z"
      fill={color}
    />
  </Svg>
);
export default Bike;
