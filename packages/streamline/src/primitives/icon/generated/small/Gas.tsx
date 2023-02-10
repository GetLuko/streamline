/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Gas = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M3 9.96c0-2.164 1.064-3.619 2.059-4.978C5.931 3.789 6.5 2.46 6.5 1c2.048 1.331 6.36 5.087 6.496 8.77a5.002 5.002 0 0 1-3.124 4.828c2.684-3.336 1.239-7.09-.872-8.598.313 3.125-1 4.273-1.625 4.898 0-.625-.125-1.648-.875-2.398C6 10 5 10.5 5 12c0 1.056.41 1.903 1.046 2.564A5.001 5.001 0 0 1 3 9.96Z"
      fill={color}
    />
  </Svg>
);
export default Gas;
