/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Pumped = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11ZM8.5 12c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2S7 8.895 7 10s.672 2 1.5 2Zm8.5-2c0 1.105-.672 2-1.5 2s-1.5-.895-1.5-2 .672-2 1.5-2 1.5.895 1.5 2ZM6.3 15.185c-.394.386-.397.815-.014 1.414C7.5 18.5 9.762 20 12 20c2.238 0 4.5-1.5 5.714-3.401.383-.599.38-1.028-.014-1.414C16.688 14.193 13.52 14 12 14c-1.52 0-4.688.193-5.7 1.185Z"
      fill={color}
    />
  </Svg>
);
export default Pumped;
