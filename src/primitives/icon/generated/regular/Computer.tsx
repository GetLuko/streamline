/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Computer = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11c0 .364-.097.706-.268 1H23a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1.268A1.99 1.99 0 0 1 2 17V6Zm9 13h2a1 1 0 0 0 1-1h-4a1 1 0 0 0 1 1Zm-7-2V6h16v11H4Zm8-11.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      fill={color}
    />
  </Svg>
);
export default Computer;
