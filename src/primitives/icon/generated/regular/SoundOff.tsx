/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SoundOff = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22.707 2.707a1 1 0 0 0-1.414-1.414L13 9.586V2.714a.71.71 0 0 0-1.212-.502L7 7.002H5a3 3 0 0 0-3 3v4.002a3 3 0 0 0 3 3h.582l-4.29 4.289a1 1 0 1 0 1.415 1.414l20-20ZM11.788 21.793l-2.669-2.67L13 15.244v6.048a.71.71 0 0 1-1.212.502ZM15 13.242v2.464c0 .663.71 1.055 1.185.593A5.982 5.982 0 0 0 18 12c0-.537-.07-1.059-.203-1.554L15 13.242Z"
      fill={color}
    />
    <Path
      d="M20 12a7.975 7.975 0 0 0-.633-3.124l1.501-1.502A9.956 9.956 0 0 1 22 12a10 10 0 0 1-5.555 8.96 1 1 0 1 1-.89-1.791A8 8 0 0 0 20 12Z"
      fill={color}
    />
  </Svg>
);
export default SoundOff;
