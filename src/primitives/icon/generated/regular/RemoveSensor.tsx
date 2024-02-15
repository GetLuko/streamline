/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RemoveSensor = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22.707 2.707a1 1 0 0 0-1.414-1.414l-3.654 3.653A6.002 6.002 0 0 0 6 7v9.586l-4.707 4.707a1 1 0 1 0 1.414 1.414l20-20ZM7.396 20.847 18 10.243V17a6 6 0 0 1-10.604 3.847Z"
      fill={color}
    />
  </Svg>
);
export default RemoveSensor;
