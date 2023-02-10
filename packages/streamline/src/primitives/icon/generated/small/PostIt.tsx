/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PostIt = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.999 1A1.999 1.999 0 0 0 1 3v10a2 2 0 0 0 2 2h4.246c.03 0 .059-.002.088-.004H9a1 1 0 0 0 1-1v-2.5a1.5 1.5 0 0 1 1.5-1.5H14a1 1 0 0 0 1-1V3c0-1.105-.893-2-1.998-2H3ZM3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5ZM3.5 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9ZM3 7.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5ZM3.5 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"
      fill={color}
    />
    <Path
      d="M11 11.996v2.503a.5.5 0 0 0 .854.353l3.002-3.002a.5.5 0 0 0-.353-.854H12a1 1 0 0 0-1 1Z"
      fill={color}
    />
  </Svg>
);
export default PostIt;
