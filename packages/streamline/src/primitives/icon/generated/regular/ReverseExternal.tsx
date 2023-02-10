/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ReverseExternal = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.293 2.266c.286-.26.716-.337 1.09-.197.373.14.617.472.617.84V7c3.883 0 6.42 2.318 7.932 5.154C22.43 14.962 23 18.384 23 21a1 1 0 0 1-1.962.275c-.46-1.609-1.096-2.59-2.172-3.227C17.73 17.376 15.952 17 13 17v4.09c0 .369-.244.7-.617.84-.374.142-.804.064-1.09-.196l-10-9.091a.852.852 0 0 1 0-1.286l10-9.09Z"
      fill={color}
    />
  </Svg>
);
export default ReverseExternal;
