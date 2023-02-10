/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SoundOn = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5 7.001a3 3 0 0 0-3 3v4.003a3 3 0 0 0 3 3h2l4.788 4.79A.71.71 0 0 0 13 21.29V2.714a.71.71 0 0 0-1.212-.502L7 7.002H5ZM15 15.706c0 .663.71 1.055 1.185.593A5.982 5.982 0 0 0 18 12c0-1.686-.695-3.21-1.815-4.3C15.711 7.24 15 7.632 15 8.295v7.412Z"
      fill={color}
    />
    <Path
      d="M16.445 3.04a1 1 0 1 0-.89 1.791A8 8 0 0 1 20 12a8 8 0 0 1-4.445 7.169 1 1 0 0 0 .89 1.791A10 10 0 0 0 22 12a10 10 0 0 0-5.555-8.96Z"
      fill={color}
    />
  </Svg>
);
export default SoundOn;
