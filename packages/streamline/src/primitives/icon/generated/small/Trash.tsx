/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Trash = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 0h1c.344 0 .547.25.75.5.203.25.406.5.75.5h3a1 1 0 1 1 0 2h-.08c0 .025 0 .05-.003.077l-.846 11a1 1 0 0 1-.997.923H4.926a1 1 0 0 1-.997-.923l-.846-11A1.016 1.016 0 0 1 3.08 3H3a1 1 0 0 1 0-2h3c.344 0 .547-.25.75-.5.203-.25.406-.5.75-.5ZM5.061 4.552a.497.497 0 0 1 .988-.11l.89 8.006a.497.497 0 1 1-.988.11l-.89-8.006ZM10.445 4c.296 0 .526.257.494.552l-.89 8.006a.497.497 0 1 1-.988-.11l.89-8.006A.497.497 0 0 1 10.445 4Z"
      fill={color}
    />
  </Svg>
);
export default Trash;
