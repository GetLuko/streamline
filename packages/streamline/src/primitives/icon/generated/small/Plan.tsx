/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Plan = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h1a.5.5 0 0 0 .5-.5v-3.465A3.5 3.5 0 0 1 7 14.5a.5.5 0 0 0 .5.5h6a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 1h-11ZM9 2v5H7.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H10V2h3.5a.5.5 0 0 1 .5.5V10H9.5a.5.5 0 0 0 0 1H14v2.5a.5.5 0 0 1-.5.5H7.973A4.5 4.5 0 0 0 3.5 10a.5.5 0 0 0-.5.5V14h-.5a.5.5 0 0 1-.5-.5V8h2.5a.5.5 0 0 0 0-1H2V2.5a.5.5 0 0 1 .5-.5H9Z"
      fill={color}
    />
  </Svg>
);
export default Plan;
