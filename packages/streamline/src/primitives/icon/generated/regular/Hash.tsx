/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Hash = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.96 3.844a1.5 1.5 0 0 0-2.92-.687L8.135 7H5.5a1.5 1.5 0 1 0 0 3h1.93l-.942 4H3.5a1.5 1.5 0 0 0 0 3h2.282l-.742 3.157a1.5 1.5 0 0 0 2.92.687L8.864 17h3.918l-.742 3.157a1.5 1.5 0 0 0 2.92.687L15.864 17H18.5a1.5 1.5 0 0 0 0-3h-1.93l.941-4H20.5a1.5 1.5 0 0 0 0-3h-2.283l.743-3.156a1.5 1.5 0 0 0-2.92-.687L15.135 7h-3.918l.743-3.156ZM13.488 14l.942-4H10.51l-.94 4h3.917Z"
      fill={color}
    />
  </Svg>
);
export default Hash;
