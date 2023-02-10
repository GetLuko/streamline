/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Thumb = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M5 12.5V8c0-.982.485-1.479 1.08-2.09.37-.378.782-.801 1.147-1.41.476-.794.398-1.666.2-2.342C7.276 1.636 7.638 1 8.183 1 8.909 1 10.5 2.09 10.5 4c0 .636-.273 1.394-.5 2 3.15 0 5 .5 5 4 0 5-4 5-5.5 5S5 14.407 5 12.5ZM3.088 7c-.93 0-1.75.64-1.894 1.558a15.557 15.557 0 0 0-.001 4.885c.144.918.965 1.557 1.894 1.557H3.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-.412Z"
      fill={color}
    />
  </Svg>
);
export default Thumb;
