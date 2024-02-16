/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Cast = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9 1a3 3 0 0 1 3 3v4.382l-4.239 2.12L4 8.411V6.764l4.763-1.3a1 1 0 0 0-.526-1.929L4 4.691V4a3 3 0 0 1 3-3h2ZM4 10.7v1.682l1.594-.797L4 10.7ZM4 14.618V17c0 1.434.503 2.751 1.343 3.784l2.405-4.122-2.612-2.612L4 14.618ZM6.877 22.124C7.787 22.68 8.856 23 10 23h.256l.883-2.946-1.93-1.93-2.332 4ZM12.344 23h3.824l-2.607-4.056L12.344 23ZM18.546 23H19a3 3 0 0 0 3-3v-2a2.99 2.99 0 0 0-.84-2.083l-1.266 2.53a1 1 0 0 1-1.789-.894l1.265-2.53A3.04 3.04 0 0 0 19 15h-4.256l-.427 1.423a.973.973 0 0 1 .024.036L18.546 23ZM12.78 14.585A1.997 1.997 0 0 1 12 13v-2.382l-4.979 2.49 2.67 2.67.032.031 2.07 2.07.987-3.294Z"
      fill={color}
    />
  </Svg>
);
export default Cast;
