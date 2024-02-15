/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Italic = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M6.962 2a.5.5 0 0 0-.5.5v.833a.5.5 0 0 0 .5.5h1.346l-2.462 7.334H4.5a.5.5 0 0 0-.5.5v.833a.5.5 0 0 0 .5.5h4.538a.5.5 0 0 0 .5-.5v-.833a.5.5 0 0 0-.5-.5H7.692l2.462-7.334H11.5a.5.5 0 0 0 .5-.5V2.5a.5.5 0 0 0-.5-.5H6.962Z"
      fill={color}
    />
  </Svg>
);
export default Italic;
