/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bubble = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M15 7.5c0 3.59-3.134 6.5-7 6.5-.471 0-.932-.043-1.377-.126-1.456-.123-3.548.64-4.65 1.098-.257.107-.542-.166-.45-.43.361-1.035.867-2.885.318-3.95A6.11 6.11 0 0 1 1 7.5C1 3.91 4.134 1 8 1s7 2.91 7 6.5Z"
      fill={color}
    />
  </Svg>
);
export default Bubble;
