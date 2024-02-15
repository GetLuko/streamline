/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Balance = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.83 5H20a.995.995 0 0 1 .935.644l2.72 6.728A3.995 3.995 0 0 1 24 14a4 4 0 1 1-7.654-1.63L18.517 7H14.83a3.001 3.001 0 0 1-.654 1.066C13.591 8.68 13 9.396 13 10.244V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2H8a2 2 0 0 1 2-2 1 1 0 0 0 1-1v-6.756c0-.848-.591-1.564-1.175-2.178A3 3 0 0 1 9.17 7H5.483l2.171 5.37A3.994 3.994 0 0 1 8 14a4 4 0 1 1-7.655-1.628l2.72-6.728a.996.996 0 0 1 .419-.5A.995.995 0 0 1 4 5h5.17a3.001 3.001 0 0 1 5.66 0ZM2.5 12.5a.71.71 0 0 1 .058-.265L4 8.668l1.442 3.568a.709.709 0 0 1 .058.264 1.5 1.5 0 0 1-3 0Zm19 0a.71.71 0 0 0-.058-.265L20 8.668l-1.442 3.568a.709.709 0 0 0-.058.264 1.5 1.5 0 0 0 3 0Z"
      fill={color}
    />
  </Svg>
);
export default Balance;
