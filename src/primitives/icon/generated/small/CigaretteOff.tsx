/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CigaretteOff = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M14.854 1.854a.5.5 0 0 0-.708-.708L8.293 7H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5.793l-5.147 5.146a.5.5 0 0 0 .708.708l13-13ZM11.5 9H9.122l2-2h.378a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5ZM13 7.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1ZM15 7.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Z"
      fill={color}
    />
  </Svg>
);
export default CigaretteOff;
