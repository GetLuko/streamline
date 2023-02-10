/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Garage = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="m1.196 9.105 10.192-7.891a1 1 0 0 1 1.224 0l10.191 7.89a.5.5 0 0 1-.306.896H22a1 1 0 0 0-1 1v10h-2V11a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10H3V11a1 1 0 0 0-1-1h-.498a.5.5 0 0 1-.306-.895Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10H6V11Zm1.5 0a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9ZM7 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9ZM7 17.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z"
      fill={color}
    />
  </Svg>
);
export default Garage;
