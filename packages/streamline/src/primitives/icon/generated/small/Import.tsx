/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Import = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M13.893 7.809A.5.5 0 0 0 13.5 7h-2.516c-.078-1.166-.43-2.129-.97-2.915-.614-.891-1.452-1.528-2.352-1.982C5.875 1.203 3.786 1 2.5 1a.5.5 0 0 0-.158.974c.727.243 2.49 1.574 2.647 5.026H2.5a.5.5 0 0 0-.393.809l5.5 7a.5.5 0 0 0 .786 0l5.5-7Z"
      fill={color}
    />
  </Svg>
);
export default Import;
