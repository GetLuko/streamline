/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Link = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8.171 2.172a4 4 0 0 1 5.658 5.656L11.33 10.33a4.004 4.004 0 0 1-6.28-.8l1.12-1.12c.122.311.309.609.56.86a2.505 2.505 0 0 0 3.54 0l2.498-2.502a2.5 2.5 0 0 0-2.963-3.965c-.634-.22-1.3-.32-1.964-.3l.33-.331Z"
      fill={color}
    />
    <Path
      d="M7.829 13.829A4 4 0 0 1 2.17 8.171L4.67 5.67a4.004 4.004 0 0 1 6.28.8L9.83 7.59a2.514 2.514 0 0 0-.56-.86 2.505 2.505 0 0 0-3.54 0L3.232 9.232a2.5 2.5 0 0 0 2.963 3.965c.634.22 1.3.32 1.964.3l-.33.332Z"
      fill={color}
    />
  </Svg>
);
export default Link;
