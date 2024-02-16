/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Outbuilding = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.416 1.185 1.21 6.095a.5.5 0 0 0 .29.908H2a1 1 0 0 1 1 1v6h1V14h1V8.003a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V14h1v.003h1v-6a1 1 0 0 1 1-1h.497a.5.5 0 0 0 .29-.907L8.573 1.185a1 1 0 0 0-1.158 0ZM8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color}
    />
  </Svg>
);
export default Outbuilding;
