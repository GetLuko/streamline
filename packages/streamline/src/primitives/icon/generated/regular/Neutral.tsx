/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Neutral = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-13-2c0 1.105-.672 2-1.5 2S7 11.105 7 10s.672-2 1.5-2 1.5.895 1.5 2Zm5.5 2c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2ZM7 15a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Z"
      fill={color}
    />
  </Svg>
);
export default Neutral;
