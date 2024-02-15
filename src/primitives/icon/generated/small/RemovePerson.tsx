/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RemovePerson = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M11.28 4.012C11 2.3 9.639 1 8 1 6.16 1 4.667 2.642 4.667 4.667c0 1.514.834 3.187 2.025 3.934L4.58 10.713c-1.23.57-2.124 1.438-2.448 2.448l-.986.985a.5.5 0 0 0 .707.708l13-13a.5.5 0 0 0-.707-.708L11.28 4.012ZM3.121 15h9.856c.565 0 1.023-.458 1.023-1.023-.018-2.171-2.633-3.934-5.88-3.976L3.122 15Z"
      fill={color}
    />
  </Svg>
);
export default RemovePerson;
