/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Text = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h.28c.43 0 .813-.276 1.02-.653C4.785 6.464 5.904 4 8 4h1a1 1 0 0 1 1 1v13c0 1.39-1.453 2.3-2.336 2.722-.388.186-.664.568-.664.999V22a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.28c0-.43-.276-.812-.664-.998C15.453 20.3 14 19.392 14 18V5a1 1 0 0 1 1-1h1c2.096 0 3.215 2.464 3.7 3.347.207.377.59.653 1.02.653H21a1 1 0 0 0 1-1V2Z"
      fill={color}
    />
  </Svg>
);
export default Text;
