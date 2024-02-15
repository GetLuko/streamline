/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Angry = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-10.996 4c-1.137 0-2.205 1.24-2.917 2.312-.28.42.197.864.637.617.825-.464 1.778-.929 2.28-.929.502 0 1.454.465 2.28.929.44.247.915-.196.636-.617C14.21 17.24 13.14 16 12.004 16ZM6.5 7a.5.5 0 0 1 .146.022l3.59 1.006a1 1 0 1 1-.777 1.813L6.253 7.935A.5.5 0 0 1 6.5 7Zm10.854.022a.5.5 0 0 1 .393.913L14.541 9.84a1 1 0 1 1-.777-1.813l3.59-1.006ZM10 12.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5Zm5 1.5c.552 0 1-.672 1-1.5s-.448-1.5-1-1.5-1 .672-1 1.5.448 1.5 1 1.5Z"
      fill={color}
    />
  </Svg>
);
export default Angry;
