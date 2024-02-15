/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Wall = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.746 1.07a.5.5 0 0 1 .508 0l5.5 3.25a.5.5 0 0 1 .246.43v6.5a.5.5 0 0 1-.246.43l-5.5 3.25a.5.5 0 0 1-.508 0l-5.5-3.25A.5.5 0 0 1 2 11.25v-6.5a.5.5 0 0 1 .246-.43l5.5-3.25ZM8 13.92l-4.517-2.67L8 8.58l4.517 2.67L8 13.92Z"
      fill={color}
    />
  </Svg>
);
export default Wall;
