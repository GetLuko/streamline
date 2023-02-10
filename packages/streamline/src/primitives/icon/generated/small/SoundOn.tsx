/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SoundOn = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M2 7a2 2 0 0 1 2-2h.23a2 2 0 0 0 1.341-.517l2.593-2.348A.5.5 0 0 1 9 2.506v10.998a.5.5 0 0 1-.836.37L5.572 11.52A2 2 0 0 0 4.227 11H4a2 2 0 0 1-2-2V7ZM10.055 2.872a.5.5 0 0 1 .673-.217A6 6 0 0 1 14 8a6 6 0 0 1-3.272 5.345.5.5 0 1 1-.456-.89A5 5 0 0 0 13 8a5 5 0 0 0-2.728-4.455.5.5 0 0 1-.217-.673Z"
      fill={color}
    />
    <Path
      d="M10 5.523c0-.439.471-.699.786-.393A3.982 3.982 0 0 1 12 7.997a3.982 3.982 0 0 1-1.214 2.867c-.315.306-.786.046-.786-.393V5.523Z"
      fill={color}
    />
  </Svg>
);
export default SoundOn;
