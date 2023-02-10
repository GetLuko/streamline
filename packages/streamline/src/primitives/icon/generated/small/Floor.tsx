/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Floor = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.746 1.07a.5.5 0 0 1 .508 0l5.5 3.25a.5.5 0 0 1 .246.43v6.5a.5.5 0 0 1-.246.43l-5.5 3.25a.5.5 0 0 1-.508 0l-5.5-3.25A.5.5 0 0 1 2 11.25v-6.5a.5.5 0 0 1 .246-.43l5.5-3.25ZM3 5.035v5.339l4.5-2.66V2.377L3 5.036Zm10 0v5.339l-4.5-2.66V2.377l4.5 2.66Z"
      fill={color}
    />
  </Svg>
);
export default Floor;
