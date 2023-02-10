/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowRight = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.411 18.468a1.5 1.5 0 1 0 2.178 2.064l7-7.5a1.5 1.5 0 0 0 0-2.064l-7-7.5a1.5 1.5 0 1 0-2.178 2.064l4.602 4.968H3.5a1.5 1.5 0 0 0 0 3h13.513l-4.602 4.968Z"
      fill={color}
    />
  </Svg>
);
export default ArrowRight;
