/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Shopping = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M0 3a1 1 0 0 1 1-1h3.257a1 1 0 0 1 .97.757L5.787 5H21a1 1 0 0 1 .972 1.239L19.7 15.477A2 2 0 0 1 17.758 17H8.284a2 2 0 0 1-1.941-1.515L4.03 6.243a1.024 1.024 0 0 1-.02-.101L3.476 4H1a1 1 0 0 1-1-1ZM8 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill={color}
    />
  </Svg>
);
export default Shopping;
