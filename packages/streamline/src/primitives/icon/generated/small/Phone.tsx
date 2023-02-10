/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Phone = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M14.132 14.132c.497-.496.794-1.158.868-1.932a.63.63 0 0 0-.297-.535l-2.309-1.437a.901.901 0 0 0-1.03.074c-.547.43-1.418 1.026-1.898.873l-.05-.019a.814.814 0 0 0-.169-.068c-.856-.36-1.755-.949-2.57-1.764-.818-.817-1.407-1.718-1.767-2.577a.844.844 0 0 0-.06-.147 6.7 6.7 0 0 1-.03-.077c-.136-.484.452-1.344.879-1.885a.901.901 0 0 0 .074-1.03l-1.438-2.31A.63.63 0 0 0 3.8 1c-.774.074-1.436.371-1.932.868-1.863 1.862-.628 6.118 2.76 9.505 3.386 3.387 7.642 4.622 9.504 2.76Z"
      fill={color}
    />
  </Svg>
);
export default Phone;
