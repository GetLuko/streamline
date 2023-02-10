/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Image = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm9 1a1 1 0 1 0 0 1.999A1 1 0 0 0 12 4ZM2 11v-.835a.5.5 0 0 1 .099-.298l3.465-4.66a.5.5 0 0 1 .825.031l2.224 3.536a.5.5 0 0 0 .823.034l1.202-1.605a.5.5 0 0 1 .77-.038l2.461 2.692a.5.5 0 0 1 .131.337V11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z"
      fill={color}
    />
  </Svg>
);
export default Image;
