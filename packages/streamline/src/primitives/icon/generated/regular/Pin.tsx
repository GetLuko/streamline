/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Pin = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 9c0 6.608-5.459 12.07-7.358 13.77a.897.897 0 0 1-1.248-.038C9.528 20.859 4 14.819 4 9a8 8 0 1 1 16 0Zm-8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      fill={color}
    />
  </Svg>
);
export default Pin;
