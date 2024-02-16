/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Megaphone = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 7.001a3 3 0 0 0-3 3v4.003c0 1.133.627 2.117 1.554 2.626.782.43 1.615.962 1.86 1.82l1.379 4.825a1 1 0 0 0 .961.725h.093a1 1 0 0 0 .99-1.141l-.674-4.718c-.086-.602.386-1.143.981-1.017 3.55.753 6.644 4.67 6.644 4.67A.71.71 0 0 0 15 21.29V2.714a.71.71 0 0 0-1.212-.502S9 7.002 5 7.002H3ZM17.105 3.49a1 1 0 0 1 1.34-.45A10 10 0 0 1 24 12a10 10 0 0 1-5.555 8.96 1 1 0 1 1-.89-1.791A8 8 0 0 0 22 12a8 8 0 0 0-4.445-7.169 1 1 0 0 1-.45-1.34Z"
      fill={color}
    />
    <Path
      d="M18.185 16.3c-.474.461-1.185.069-1.185-.594V8.294c0-.663.71-1.055 1.185-.593A5.982 5.982 0 0 1 20 12c0 1.686-.695 3.21-1.815 4.3Z"
      fill={color}
    />
  </Svg>
);
export default Megaphone;
