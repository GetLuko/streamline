/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Fire = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8.626 1s-1.358 2.367 1.716 4.369c.147.096.288.194.424.295A5.113 5.113 0 0 1 13 9.908C13 12.72 10.762 15 8 15c-1.918 0-3.584-1.1-4.422-2.716h-.002c-.324-.603-.575-1.785-.575-2.376V9.86c0-.644-.087-2.365 1.25-3.769-.034 1.328.313 1.91 1.25 2.547C4.77 5.382 5.64 2.689 8.626 1Z"
      fill={color}
    />
  </Svg>
);
export default Fire;
