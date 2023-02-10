/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Map = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.316 2.051A1 1 0 0 0 2 3v16a.999.999 0 0 0 .684.949l6 2a1 1 0 0 0 .632 0L15 20.054l5.684 1.895A1 1 0 0 0 22 21V5a1 1 0 0 0-.684-.949l-6-2a1 1 0 0 0-.632 0L9 3.946 3.316 2.05ZM15 17.225a1 1 0 0 1-.684.949l-4 1.333A1 1 0 0 1 9 18.558V6.775a1 1 0 0 1 .684-.949l4-1.333A1 1 0 0 1 15 5.442v11.783Z"
      fill={color}
    />
  </Svg>
);
export default Map;
