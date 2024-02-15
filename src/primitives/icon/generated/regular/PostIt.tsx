/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PostIt = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 22v-.004a1 1 0 0 0 1-1v-4a3 3 0 0 1 3-3h4a1 1 0 0 0 1-1v-9a2 2 0 0 0-2-2H8c-.042 0-.084.001-.126.004H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h9ZM5 4a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H5ZM4 9a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z"
      fill={color}
    />
    <Path
      d="M21.503 15.996H17a1 1 0 0 0-1 1V21.5a.5.5 0 0 0 .854.354l5.002-5.003a.5.5 0 0 0-.353-.854Z"
      fill={color}
    />
  </Svg>
);
export default PostIt;
