/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Snow = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13 3a1 1 0 1 0-2 0v2.586L8.707 3.293a1 1 0 0 0-1.414 1.414L11 8.414V11H8.414L4.707 7.293a1 1 0 1 0-1.414 1.414L5.586 11H3a1 1 0 1 0 0 2h2.586l-2.293 2.293a1 1 0 1 0 1.414 1.414L8.414 13H11v2.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L11 18.414V21a1 1 0 1 0 2 0v-2.586l2.293 2.293a1 1 0 0 0 1.414-1.414L13 15.586V13h2.586l3.707 3.707a1 1 0 0 0 1.414-1.414L18.414 13H21a1 1 0 1 0 0-2h-2.586l2.293-2.293a1 1 0 0 0-1.414-1.414L15.586 11H13V8.414l3.707-3.707a1 1 0 0 0-1.414-1.414L13 5.586V3Z"
      fill={color}
    />
  </Svg>
);
export default Snow;
