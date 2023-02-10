/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Fence = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.474 3.342a.5.5 0 0 0-.948 0l-.5 1.5A.5.5 0 0 0 1 5v7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V11h2v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V11h2v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V11h2v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.026-.158l-.5-1.5a.5.5 0 0 0-.948 0l-.5 1.5A.5.5 0 0 0 13 5v1h-2V5a.5.5 0 0 0-.026-.158l-.5-1.5a.5.5 0 0 0-.948 0l-.5 1.5A.5.5 0 0 0 9 5v1H7V5a.5.5 0 0 0-.026-.158l-.5-1.5a.5.5 0 0 0-.948 0l-.5 1.5A.5.5 0 0 0 5 5v1H3V5a.5.5 0 0 0-.026-.158l-.5-1.5ZM13 10V7h-2v3h2Zm-4 0V7H7v3h2Zm-4 0V7H3v3h2Z"
      fill={color}
    />
  </Svg>
);
export default Fence;
