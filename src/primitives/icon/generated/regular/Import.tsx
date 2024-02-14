/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Import = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21.734 12.707c.26-.286.338-.716.197-1.09-.14-.373-.472-.617-.84-.617h-4.09c0-3.883-2.32-6.42-5.155-7.932C9.038 1.57 5.616 1 3 1a1 1 0 0 0-.275 1.962c1.609.459 2.59 1.096 3.227 2.172C6.624 6.27 7 8.048 7 11H2.91c-.369 0-.7.244-.84.617-.141.374-.064.804.196 1.09l9.091 10c.355.39.93.39 1.286 0l9.09-10Z"
      fill={color}
    />
  </Svg>
);
export default Import;
