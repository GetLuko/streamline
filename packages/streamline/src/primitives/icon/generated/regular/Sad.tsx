/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Sad = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11ZM8.5 12c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2S7 8.895 7 10s.672 2 1.5 2Zm8.5-2c0 1.105-.672 2-1.5 2s-1.5-.895-1.5-2 .672-2 1.5-2 1.5.895 1.5 2Zm-9.375 7.535A6.966 6.966 0 0 1 12 16c1.656 0 3.176.574 4.375 1.535a1 1 0 0 0 1.25-1.56A8.966 8.966 0 0 0 12 14c-2.127 0-4.085.74-5.625 1.974a1 1 0 1 0 1.25 1.56Z"
      fill={color}
    />
  </Svg>
);
export default Sad;
