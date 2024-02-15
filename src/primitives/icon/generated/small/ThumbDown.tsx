/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ThumbDown = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M11 4.5V9c0 .982-.485 1.479-1.08 2.09-.37.378-.782.801-1.147 1.41-.476.794-.398 1.666-.2 2.342.152.522-.21 1.158-.755 1.158-.727 0-2.318-1.09-2.318-3 0-.636.273-1.394.5-2-3.15 0-5-.5-5-4 0-5 4-5 5.5-5s4.5.593 4.5 2.5ZM12.912 11c.93 0 1.75-.64 1.894-1.558a15.547 15.547 0 0 0 .001-4.885C14.663 3.639 13.842 3 12.913 3H12.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h.412Z"
      fill={color}
    />
  </Svg>
);
export default ThumbDown;
