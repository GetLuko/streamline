/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ChevronSides = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.94 6.56a1.5 1.5 0 0 1 2.12-2.12l6.5 6.5a1.5 1.5 0 0 1 0 2.12l-6.5 6.5a1.5 1.5 0 0 1-2.12-2.12L20.378 12l-5.44-5.44ZM9.06 17.44a1.5 1.5 0 0 1-2.12 2.12l-6.5-6.5a1.5 1.5 0 0 1 0-2.12l6.5-6.5a1.5 1.5 0 1 1 2.12 2.12L3.622 12l5.44 5.44Z"
      fill={color}
    />
  </Svg>
);
export default ChevronSides;
