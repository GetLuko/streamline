/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Crutch = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.56 1.44a1.5 1.5 0 0 0-2.12 2.12l.292.294-3.858 3.858a4.999 4.999 0 0 0-1.107 1.679l-1.238 3.094a5 5 0 0 1-1.107 1.679L2.75 19.836l-.043-.043a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.414-1.414l-.043-.043 5.672-5.672a5 5 0 0 1 1.679-1.107l3.094-1.238a5 5 0 0 0 1.679-1.107l3.858-3.858.293.293a1.5 1.5 0 0 0 2.122-2.122l-5-5Zm1.172 5.414-1.586-1.586-3.585 3.586 1.585 1.585 3.586-3.585Zm-4.293 4.292-1.585-1.585-.002.001-.797 1.993a.3.3 0 0 0 .39.39l1.993-.797.001-.002Z"
      fill={color}
    />
  </Svg>
);
export default Crutch;
