/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Robot = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 2a.5.5 0 0 1 .5.5V4h4V2.5a.5.5 0 0 1 1 0V4a2 2 0 0 1 2 2 2 2 0 1 1 0 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a2 2 0 1 1 0-4 2 2 0 0 1 2-2V2.5a.5.5 0 0 1 .5-.5Zm1 6c.276 0 .5-.448.5-1s-.224-1-.5-1-.5.448-.5 1 .224 1 .5 1ZM10 7c0 .552-.224 1-.5 1S9 7.552 9 7s.224-1 .5-1 .5.448.5 1ZM6.333 9.364a.5.5 0 1 0-.666.745A3.489 3.489 0 0 0 8 11a3.49 3.49 0 0 0 2.334-.891.5.5 0 0 0-.667-.745A2.489 2.489 0 0 1 8 10c-.64 0-1.224-.24-1.667-.636Z"
      fill={color}
    />
  </Svg>
);
export default Robot;
