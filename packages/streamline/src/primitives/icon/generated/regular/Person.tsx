/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Person = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 6.5c0 3.038-2.239 6.5-5 6.5S7 9.538 7 6.5 9.239 1 12 1s5 2.462 5 5.5ZM12 14c-4.97 0-9 2.462-9 5.5A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5c0-3.038-4.03-5.5-9-5.5Z"
      fill={color}
    />
  </Svg>
);
export default Person;
