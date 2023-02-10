/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Microphone = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M5.5 4c-.276 0-.504-.226-.459-.498a3 3 0 0 1 5.918 0c.045.272-.183.498-.459.498h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 0 0 1h1c.276 0 .504.226.459.498a3 3 0 0 1-5.918 0C4.996 7.226 5.224 7 5.5 7h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 0 0-1h-1Z"
      fill={color}
    />
    <Path
      d="M3.5 6a.5.5 0 0 1 .5.5V7a4 4 0 1 0 8 0v-.5a.5.5 0 0 1 1 0V7a5.002 5.002 0 0 1-4.052 4.91.539.539 0 0 0-.448.518V13.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1H7a.5.5 0 0 0 .5-.5v-1.072a.539.539 0 0 0-.448-.518A5.002 5.002 0 0 1 3 7v-.5a.5.5 0 0 1 .5-.5Z"
      fill={color}
    />
  </Svg>
);
export default Microphone;
