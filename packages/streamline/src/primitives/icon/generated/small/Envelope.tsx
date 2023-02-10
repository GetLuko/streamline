/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Envelope = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8.21 1.046a.5.5 0 0 0-.42 0l-6.5 3a.5.5 0 0 0 0 .908l6.5 3a.5.5 0 0 0 .42 0l6.5-3a.5.5 0 0 0 0-.908l-6.5-3Z"
      fill={color}
    />
    <Path
      d="M1.23 6.329a.5.5 0 0 1 .48-.033L7.37 8.909a1.5 1.5 0 0 0 1.258 0l5.662-2.613A.5.5 0 0 1 15 6.75V12c0 .552-.442 1-.994 1H1.996A.997.997 0 0 1 1 12V6.75a.5.5 0 0 1 .23-.421Z"
      fill={color}
    />
  </Svg>
);
export default Envelope;
