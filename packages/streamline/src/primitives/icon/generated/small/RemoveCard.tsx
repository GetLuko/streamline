/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RemoveCard = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M14.854 1.854a.5.5 0 0 0-.708-.708L12.293 3H2a1 1 0 0 0-1 1v.5a.5.5 0 0 0 .5.5h8.793l-1 1H1.5a.5.5 0 0 0-.5.5V12a1 1 0 0 0 1 1h.293l-1.147 1.146a.5.5 0 0 0 .708.708l13-13Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12.122 6-7 7H14a1 1 0 0 0 1-1V6.5a.5.5 0 0 0-.5-.5h-2.378ZM10.5 10a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z"
      fill={color}
    />
    <Path
      d="M14.5 5h-1.378l1.643-1.644A.996.996 0 0 1 15 4v.5a.5.5 0 0 1-.5.5Z"
      fill={color}
    />
  </Svg>
);
export default RemoveCard;
