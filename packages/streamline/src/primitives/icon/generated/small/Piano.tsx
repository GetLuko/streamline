/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Piano = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Zm.5 3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H3V6h-.5ZM5 12H4V6h1v6Zm1 0h1.5v-2a.5.5 0 0 1-.5-.5V6H6v6Zm2.5-2v2H10V6H9v3.5a.5.5 0 0 1-.5.5Zm4.5 2h.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H13v6Zm-2 0V6h1v6h-1ZM2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      fill={color}
    />
  </Svg>
);
export default Piano;
