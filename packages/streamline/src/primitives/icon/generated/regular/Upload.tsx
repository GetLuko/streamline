/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Upload = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M4 19a3 3 0 1 1 0-6c.286 0 .53-.309.43-.577a7 7 0 1 1 13.423-3.855.57.57 0 0 0 .516.446C20.923 9.21 23 11.395 23 14a5 5 0 0 1-5 5h-4a1 1 0 0 1-1-1v-5.586l2.293 2.293a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L11 12.414V18a1 1 0 0 1-1 1H4Z"
      fill={color}
    />
  </Svg>
);
export default Upload;
