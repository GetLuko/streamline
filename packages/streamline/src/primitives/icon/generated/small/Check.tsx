/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Check = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.625 2.22a1 1 0 0 1 .156 1.405l-8 10a1 1 0 0 1-1.562 0l-4-5a1 1 0 1 1 1.562-1.25L6 11.4l7.22-9.024a1 1 0 0 1 1.405-.156Z"
      fill={color}
    />
  </Svg>
);
export default Check;
