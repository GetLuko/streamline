/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Cigarette = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M12.073 4.964a2.5 2.5 0 1 1 2.796-3.266A2 2 0 0 1 15.6 4.7a.999.999 0 0 1-.6 1.8 1 1 0 0 1-.923-.615 1.5 1.5 0 0 1-2.004-.921ZM0 7.5A.5.5 0 0 1 .5 7h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1ZM13 7.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1ZM15 7.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Z"
      fill={color}
    />
  </Svg>
);
export default Cigarette;
