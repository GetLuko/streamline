/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const NoStyle = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.997 2v.003l2.996 2.995h3.5l-.736 2.763 2.367 2.367 1.368-5.13h5.496a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5.998Zm6.988 12.397L20.59 22 22 20.59 3.41 2 2 3.412l8.618 8.618-1.787 6.7a1 1 0 0 0 .967 1.258h.928a1 1 0 0 0 .966-.742l1.293-4.85Z"
      fill={color}
    />
  </Svg>
);
export default NoStyle;
