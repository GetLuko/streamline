/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Crown = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.981 3a.5.5 0 0 1 .395.17l3.212 3.67 2.635-1.756a.5.5 0 0 1 .766.52l-1.5 7A.5.5 0 0 1 13 13H3a.5.5 0 0 1-.489-.395l-1.5-7a.5.5 0 0 1 .737-.54l3.117 1.782L7.6 3.2a.5.5 0 0 1 .381-.2Z"
      fill={color}
    />
  </Svg>
);
export default Crown;
