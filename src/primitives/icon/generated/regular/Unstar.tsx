/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Unstar = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2.707 22.707a1 1 0 0 1-1.414-1.414l4.131-4.131.366-2.129a1.07 1.07 0 0 0-.308-.947l-4.157-4.047a1.07 1.07 0 0 1 .594-1.825l5.744-.834c.35-.05.65-.27.807-.585l2.569-5.198a1.072 1.072 0 0 1 1.922 0l2.569 5.198c.028.057.062.111.099.162l5.664-5.664a1 1 0 1 1 1.414 1.414l-20 20ZM20.289 7.954 6.373 21.87l5.128-2.693c.313-.164.686-.164.998 0l5.138 2.698c.786.413 1.705-.254 1.555-1.128l-.982-5.714a1.07 1.07 0 0 1 .308-.947l4.157-4.047a1.07 1.07 0 0 0-.594-1.825l-1.792-.26Z"
      fill={color}
    />
  </Svg>
);
export default Unstar;
