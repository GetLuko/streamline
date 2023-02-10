/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const AddUser = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M7 3.5C7 4.88 6.105 6 5 6S3 4.88 3 3.5 3.895 1 5 1s2 1.12 2 2.5ZM6.41 8.402c.29-.5.157-1.198-.41-1.307A5.279 5.279 0 0 0 5 7c-2.21 0-4 1.343-4 3a1 1 0 0 0 1 1h3.227c.494 0 .773-.506.773-1a3.329 3.329 0 0 1 .41-1.598Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm.5-6a.5.5 0 0 0-1 0v1.5H9a.5.5 0 0 0 0 1h1.5V13a.5.5 0 0 0 1 0v-1.5H13a.5.5 0 0 0 0-1h-1.5V9Z"
      fill={color}
    />
  </Svg>
);
export default AddUser;
