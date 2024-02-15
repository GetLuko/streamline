/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Cable = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M6.25 2C5.56 2 5 2.56 5 3.25V10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v.5a.5.5 0 0 1-1 0V14a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1V3.25a2.25 2.25 0 0 1 4.5 0v9.5a1.25 1.25 0 1 0 2.5 0V6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1v-.5a.5.5 0 0 1 1 0V2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v6.75a2.25 2.25 0 0 1-4.5 0v-9.5C7.5 2.56 6.94 2 6.25 2Z"
      fill={color}
    />
  </Svg>
);
export default Cable;
