/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Document = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M9 1.497V4a1 1 0 0 0 1 1h2.503a.5.5 0 0 0 .353-.854L9.854 1.144A.5.5 0 0 0 9 1.497Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2.5A1.5 1.5 0 0 0 9.5 6H12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2Zm1 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4.5 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM4 11.5a.5.5 0 0 1 .5-.5h7a.5.5 0 1 1 0 1h-7a.5.5 0 0 1-.5-.5Z"
      fill={color}
    />
  </Svg>
);
export default Document;
