/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Snooze = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1a.5.5 0 0 1 .5.5v.525A5 5 0 0 1 13 7c0 2.024.537 3.23.824 3.73.102.177.295.27.5.27.373 0 .676.303.676.677V12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-.323c0-.374.303-.677.677-.677a.562.562 0 0 0 .499-.27C2.463 10.23 3 9.024 3 7a5 5 0 0 1 4.5-4.975V1.5A.5.5 0 0 1 8 1ZM6 6.5a.5.5 0 0 0 .5.5h1.793L6.146 9.146A.5.5 0 0 0 6.5 10h3a.5.5 0 0 0 0-1H7.707l2.147-2.146A.5.5 0 0 0 9.5 6h-3a.5.5 0 0 0-.5.5Z"
      fill={color}
    />
    <Path d="M8 15a2 2 0 0 1-1.732-1h3.464A2 2 0 0 1 8 15Z" fill={color} />
  </Svg>
);
export default Snooze;
