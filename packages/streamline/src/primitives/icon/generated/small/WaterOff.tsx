/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const WaterOff = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15a5 5 0 0 0 5-5c0-1.18-.453-2.51-1.086-3.793l-7.388 7.389C5.426 14.466 6.65 15 8 15Zm4-5a.5.5 0 0 0-1 0 3 3 0 0 1-3 3 .5.5 0 0 0 0 1 4 4 0 0 0 4-4Z"
      fill={color}
    />
    <Path
      d="M10.897 4.396a31.766 31.766 0 0 0-2.181-3.044.911.911 0 0 0-1.432 0C5.902 3.064 3 7.014 3 10c0 .678.135 1.324.38 1.914l-2.234 2.232a.5.5 0 0 0 .708.708l13-13a.5.5 0 0 0-.708-.708l-3.25 3.25Z"
      fill={color}
    />
  </Svg>
);
export default WaterOff;
