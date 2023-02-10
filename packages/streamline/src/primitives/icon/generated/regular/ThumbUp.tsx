/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ThumbUp = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8 11v6.394c0 1.004.499 1.952 1.414 2.362C10.781 20.367 12.796 21 15 21c5 0 6.143-.428 6.5-1.5.333-1-.5-1.5-.5-1.5s1.5 0 1.5-2c0-.75-.5-1-.5-1s1 0 1-1.5-1-1.5-1-1.5.5-.303.5-1.5-1.363-2.5-7-2.5c.357-.952.5-2 .5-3 0-3-1.857-5-3-5-.855 0-1.426 1-1.185 1.82.31 1.061.433 2.433-.315 3.68-.574.957-1.222 1.621-1.802 2.216C8.762 8.676 8 9.457 8 11ZM3.442 10c-.861 0-1.624.55-1.828 1.387C1.332 12.542 1 14.271 1 16c0 1.73.332 3.458.614 4.613.204.836.967 1.387 1.828 1.387H5a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H3.442Z"
      fill={color}
    />
  </Svg>
);
export default ThumbUp;
