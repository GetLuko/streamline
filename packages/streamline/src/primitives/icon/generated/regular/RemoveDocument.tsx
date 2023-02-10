/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RemoveDocument = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19.562 5.852 18.417 7h-.002l-2 2h.002L4.036 21.38v-.002l-1.329 1.33a1 1 0 0 1-1.414-1.415L4 18.586V3a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v4a3 3 0 0 0 1.825 2.761L15.585 7H15a1 1 0 0 1-1-1V1.497a.5.5 0 0 1 .854-.353l3.294 3.294 3.145-3.145a1 1 0 1 1 1.414 1.414l-3.145 3.145ZM5.352 22.893 19.22 9.024A1 1 0 0 1 20 10v11a2 2 0 0 1-2 2H6c-.227 0-.445-.038-.648-.107Z"
      fill={color}
    />
  </Svg>
);
export default RemoveDocument;
