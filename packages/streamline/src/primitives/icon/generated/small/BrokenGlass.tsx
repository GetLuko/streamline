/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrokenGlass = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2Zm1 .5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5H4.5A.5.5 0 0 1 4 7V2.5ZM9 2a.5.5 0 0 0-.5.5V7a.5.5 0 0 0 .5.5h2.5A.5.5 0 0 0 12 7V2.5a.5.5 0 0 0-.5-.5H9ZM4 9a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1-.5-.5V9Zm4.5 0c0-.062.011-.12.032-.175l.624.312-.656.656V9Zm0 4.349v-3.04l1.656.828-.545.544L8.5 13.35Zm3 .651h-1.293l-.564-.564.435-.651.715.715H12a.5.5 0 0 1-.5.5Zm.5-1.5h-.793l-.5-.5 1.137-1.137-2-1 1-1-.726-.363H11.5a.5.5 0 0 1 .5.5v3.5Z"
      fill={color}
    />
  </Svg>
);
export default BrokenGlass;
