/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Door = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 15.822V23h1.01c.658 0 1.315-.065 1.961-.194l8.225-1.645a1 1 0 0 0 .804-.98V5.82a1 1 0 0 0-.804-.98L8.18 3.435C7.919 3.384 7.956 3 8.222 3H17.5a.5.5 0 0 1 .5.5V23h2V3a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12.822ZM15 13c0 1.105-.448 2-1 2s-1-.895-1-2 .448-2 1-2 1 .895 1 2Z"
      fill={color}
    />
  </Svg>
);
export default Door;
