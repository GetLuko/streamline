/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Fence = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.894 4.553a1 1 0 0 0-1.788 0l-1 2A1 1 0 0 0 1 7v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h2v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h2v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h2v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7a1 1 0 0 0-.106-.447l-1-2a1 1 0 0 0-1.788 0l-1 2A1 1 0 0 0 19 7v2h-2V7a1 1 0 0 0-.106-.447l-1-2a1 1 0 0 0-1.788 0l-1 2A1 1 0 0 0 13 7v2h-2V7a1 1 0 0 0-.106-.447l-1-2a1 1 0 0 0-1.788 0l-1 2A1 1 0 0 0 7 7v2H5V7a1 1 0 0 0-.106-.447l-1-2ZM19 15v-4h-2v4h2Zm-6 0v-4h-2v4h2Zm-6 0v-4H5v4h2Z"
      fill={color}
    />
  </Svg>
);
export default Fence;
