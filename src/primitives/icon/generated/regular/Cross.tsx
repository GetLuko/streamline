/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Cross = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21.56 4.56a1.5 1.5 0 0 0-2.12-2.12L12 9.878l-7.44-7.44a1.5 1.5 0 1 0-2.12 2.122L9.878 12l-7.44 7.44a1.5 1.5 0 0 0 2.122 2.12L12 14.122l7.44 7.44a1.5 1.5 0 0 0 2.12-2.122L14.122 12l7.44-7.44Z"
      fill={color}
    />
  </Svg>
);
export default Cross;
