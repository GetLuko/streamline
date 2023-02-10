/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Snow = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8.5 1.5a.5.5 0 0 0-1 0v2.293L5.854 2.146a.5.5 0 1 0-.708.708L7.5 5.207V7.5H5.207L2.854 5.146a.5.5 0 1 0-.708.708L3.793 7.5H1.5a.5.5 0 0 0 0 1h2.293l-1.647 1.646a.5.5 0 0 0 .708.708L5.207 8.5H7.5v2.293l-2.354 2.353a.5.5 0 0 0 .708.708L7.5 12.207V14.5a.5.5 0 0 0 1 0v-2.293l1.646 1.647a.5.5 0 0 0 .708-.708L8.5 10.793V8.5h2.293l2.353 2.354a.5.5 0 0 0 .708-.708L12.207 8.5H14.5a.5.5 0 0 0 0-1h-2.293l1.647-1.646a.5.5 0 0 0-.708-.708L10.793 7.5H8.5V5.207l2.354-2.353a.5.5 0 0 0-.708-.708L8.5 3.793V1.5Z"
      fill={color}
    />
  </Svg>
);
export default Snow;
