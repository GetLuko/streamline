/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SoundOff = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M14.854 1.854a.5.5 0 0 0-.708-.708L9 6.293V2.506a.5.5 0 0 0-.836-.37L5.571 4.482A2 2 0 0 1 4.23 5H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h.227l.065.001-3.146 3.145a.5.5 0 0 0 .708.708l13-13ZM8.164 13.874 6.112 12.01 9 9.12v4.383a.5.5 0 0 1-.836.37ZM10 8.121v2.35c0 .439.471.699.786.393A3.982 3.982 0 0 0 12 7.997a3.98 3.98 0 0 0-.316-1.56L10 8.121Z"
      fill={color}
    />
    <Path
      d="M13 8c0-.834-.204-1.621-.566-2.313l.735-.735a6 6 0 0 1-2.442 8.393.5.5 0 1 1-.455-.89A5 5 0 0 0 13 8Z"
      fill={color}
    />
  </Svg>
);
export default SoundOff;
