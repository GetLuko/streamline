/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Area = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3Zm10.707-1H13c.09 0 .176.012.259.034L2.034 13.259A1.001 1.001 0 0 1 2 13v-1.293L11.707 2Zm-1.414 0H8.707L2 8.707v1.586L10.293 2ZM5.707 2h1.586L2 7.293V5.707L5.707 2ZM4.293 2H3a1 1 0 0 0-1 1v1.293L4.293 2ZM2.74 13.966c.083.022.17.034.259.034h1.293L14 4.293V3c0-.09-.012-.176-.034-.259L2.741 13.966ZM7.293 14H5.707L14 5.707v1.586L7.293 14Zm1.414 0h1.586L14 10.293V8.707L8.707 14ZM13 14h-1.293L14 11.707V13a1 1 0 0 1-1 1Z"
      fill={color}
    />
  </Svg>
);
export default Area;
