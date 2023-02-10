/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RemoveHouse = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="m4 18.586-2.707 2.707a1 1 0 1 0 1.414 1.414l20-20a1 1 0 0 0-1.414-1.414l-3.744 3.744-4.937-3.823a1 1 0 0 0-1.224 0L1.196 9.104a.5.5 0 0 0 .307.896H3a1 1 0 0 1 1 1v7.586ZM13.818 14.425l6.92-6.92 2.066 1.6a.5.5 0 0 1-.306.895H21a1 1 0 0 0-1 1v10h-6v-6a.995.995 0 0 0-.182-.575ZM7.243 21 10 18.243V21H7.243Z"
      fill={color}
    />
  </Svg>
);
export default RemoveHouse;
