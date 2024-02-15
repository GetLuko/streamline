/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const EyeClosed = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.707 2.707a1 1 0 0 0-1.414-1.414l-4.84 4.84C15.06 5.456 13.55 5 12 5 7.503 5 3.336 8.83 1.47 10.825a1.702 1.702 0 0 0 0 2.35c.933.997 2.442 2.454 4.28 3.661l-4.457 4.457a1 1 0 1 0 1.414 1.414l20-20ZM8.554 14.032l5.478-5.478a4 4 0 0 0-5.478 5.478Z"
      fill={color}
    />
    <Path
      d="M15.992 12.25a4 4 0 0 1-3.742 3.742l-2.66 2.661c.784.22 1.591.347 2.41.347 4.497 0 8.664-3.83 10.53-5.825a1.702 1.702 0 0 0 0-2.35 26.118 26.118 0 0 0-2.646-2.466l-3.892 3.891Z"
      fill={color}
    />
  </Svg>
);
export default EyeClosed;
