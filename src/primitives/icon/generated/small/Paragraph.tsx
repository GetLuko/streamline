/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Paragraph = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M2.5 2a.5.5 0 0 0-.5.5V3a.5.5 0 0 0 .5.5h11A.5.5 0 0 0 14 3v-.5a.5.5 0 0 0-.5-.5h-11ZM2.5 5.5A.5.5 0 0 0 2 6v.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-9ZM2.5 12.5a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V13a.5.5 0 0 0-.5-.5h-6ZM2 9.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 2 10v-.5Z"
      fill={color}
    />
  </Svg>
);
export default Paragraph;
