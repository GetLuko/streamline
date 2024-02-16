/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SpeedMore = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 10a8 8 0 1 0-16 0c0 2 3 4 8 4s8-2 8-4ZM3 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm10.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM5 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm3-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm3 .5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-4 5a1 1 0 0 1 1-1c2.552 0 6 .448 6 1s-3.448 1-6 1a1 1 0 0 1-1-1Z"
      fill={color}
    />
  </Svg>
);
export default SpeedMore;
