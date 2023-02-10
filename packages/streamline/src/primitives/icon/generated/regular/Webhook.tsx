/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Webhook = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.164 7.447a4 4 0 1 0-2.591 1.512l2.204 3.779a5.995 5.995 0 0 1 2.59-1.513l-2.203-3.778ZM12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5.573 13.04l2.204-3.778a5.995 5.995 0 0 0 2.59 1.513l-2.203 3.778a4 4 0 1 1-2.591-1.512ZM5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.811 18.5a6.01 6.01 0 0 0 0-3h4.48A4.001 4.001 0 0 1 23 17a4 4 0 0 1-7.71 1.5h-4.48ZM20 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill={color}
    />
  </Svg>
);
export default Webhook;
