/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bell = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8.5 1.5a.5.5 0 0 0-1 0v.525A5 5 0 0 0 3 7c0 2.024-.537 3.23-.824 3.73a.562.562 0 0 1-.5.27.677.677 0 0 0-.676.677V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.323a.677.677 0 0 0-.677-.677.562.562 0 0 1-.499-.27C13.537 10.23 13 9.024 13 7a5 5 0 0 0-4.5-4.975V1.5ZM6.268 14a2 2 0 0 0 3.464 0H6.268Z"
      fill={color}
    />
  </Svg>
);
export default Bell;
