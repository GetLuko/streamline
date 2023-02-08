/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RemoveBank = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 19.586V19c0-.55.45-1 1-1v-1a1 1 0 0 1 1-1v-4a1 1 0 0 1-1-1v-1H1.503a.5.5 0 0 1-.307-.895l10.192-7.891a1 1 0 0 1 1.224 0l4.937 3.823 3.744-3.744a1 1 0 1 1 1.414 1.414l-20 20a1 1 0 0 1-1.414-1.414L3 19.586ZM10.586 12H11a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1v3.586L10.586 12ZM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill={color}
    />
    <Path
      d="M5.243 22H22v-1a1 1 0 0 0-1-1v-1a1 1 0 0 0-1-1v-1a1 1 0 0 0-1-1v-4a1 1 0 0 0 1-1v-1h2.497a.5.5 0 0 0 .307-.895l-2.066-1.6-4.313 4.313A.995.995 0 0 0 17 12v4a1 1 0 0 0-1 1v1h-2v-1a1 1 0 0 0-1-1v-1.757L5.243 22Z"
      fill={color}
    />
  </Svg>
);
export default RemoveBank;
