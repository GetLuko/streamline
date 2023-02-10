/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrandTwitter = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7.91 21.375c8.302 0 12.845-6.88 12.845-12.834 0-.194 0-.388-.009-.581A9.191 9.191 0 0 0 23 5.62c-.81.36-1.681.598-2.597.713a4.54 4.54 0 0 0 1.99-2.499 8.985 8.985 0 0 1-2.87 1.091 4.518 4.518 0 0 0-7.809 3.088c0 .352.044.695.114 1.029a12.822 12.822 0 0 1-9.305-4.715 4.522 4.522 0 0 0 1.4 6.026A4.568 4.568 0 0 1 1.88 9.79v.061A4.521 4.521 0 0 0 5.5 14.276a4.403 4.403 0 0 1-1.189.158 4.44 4.44 0 0 1-.845-.079 4.514 4.514 0 0 0 4.217 3.132 9.058 9.058 0 0 1-5.608 1.935A8.69 8.69 0 0 1 1 19.36a12.848 12.848 0 0 0 6.91 2.015Z"
      fill="#1DA1F2"
    />
  </Svg>
);
export default BrandTwitter;
