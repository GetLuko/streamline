/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Hash = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.243 1.03a1 1 0 0 1 .727 1.213L7.406 4.5h2.938l.686-2.743a1 1 0 1 1 1.94.486L12.406 4.5H14a1 1 0 1 1 0 2h-2.094l-.75 3H12.5a1 1 0 1 1 0 2h-1.844l-.686 2.742a1 1 0 1 1-1.94-.485l.564-2.257H5.656l-.686 2.742a1 1 0 1 1-1.94-.485l.564-2.257H2a1 1 0 1 1 0-2h2.094l.75-3H3.5a1 1 0 1 1 0-2h1.844l.686-2.743a1 1 0 0 1 1.213-.727ZM6.906 6.5l-.75 3h2.938l.75-3H6.906Z"
      fill={color}
    />
  </Svg>
);
export default Hash;
