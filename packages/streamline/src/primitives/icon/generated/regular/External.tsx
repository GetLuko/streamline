/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const External = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.707 2.266a1.074 1.074 0 0 0-1.09-.197c-.373.14-.617.472-.617.84V7c-3.883 0-6.42 2.318-7.932 5.154C1.57 14.962 1 18.384 1 21a1 1 0 0 0 1.962.275c.459-1.609 1.096-2.59 2.172-3.227C6.27 17.376 8.048 17 11 17v4.09c0 .369.244.7.617.84.374.142.804.064 1.09-.196l10-9.091a.852.852 0 0 0 0-1.286l-10-9.09Z"
      fill={color}
    />
  </Svg>
);
export default External;
