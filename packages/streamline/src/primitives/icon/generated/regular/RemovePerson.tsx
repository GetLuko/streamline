/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RemovePerson = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M1.293 22.707a1 1 0 0 1 0-1.414l1.71-1.71A1.53 1.53 0 0 1 3 19.5c0-2.164 2.046-4.037 5.02-4.934l2.109-2.109C8.294 11.365 7 8.81 7 6.5 7 3.462 9.239 1 12 1c2.497 0 4.567 2.014 4.94 4.646l4.353-4.353a1 1 0 1 1 1.414 1.414l-20 20a1 1 0 0 1-1.414 0ZM14.093 14.15 7.243 21H19.5a1.5 1.5 0 0 0 1.5-1.5c0-2.597-2.946-4.774-6.907-5.35Z"
      fill={color}
    />
  </Svg>
);
export default RemovePerson;
