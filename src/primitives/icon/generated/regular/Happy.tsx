/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Happy = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11ZM8.5 12c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2S7 8.895 7 10s.672 2 1.5 2Zm8.5-2c0 1.105-.672 2-1.5 2s-1.5-.895-1.5-2 .672-2 1.5-2 1.5.895 1.5 2Zm-9.286 5.2a1 1 0 1 0-1.428 1.399A7.979 7.979 0 0 0 12 19c2.238 0 4.263-.92 5.714-2.401a1 1 0 1 0-1.428-1.4A5.98 5.98 0 0 1 12 17a5.979 5.979 0 0 1-4.286-1.8Z"
      fill={color}
    />
  </Svg>
);
export default Happy;
