/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Link = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.904 2.904a6.5 6.5 0 0 1 9.192 9.192l-4 4a6.5 6.5 0 0 1-10.13-1.184l2.237-2.236a3.5 3.5 0 0 0 5.772 1.299l4-4a3.5 3.5 0 0 0-4.398-5.4 8.526 8.526 0 0 0-3.8-.544l1.127-1.127Z"
      fill={color}
    />
    <Path
      d="M12.096 21.096a6.5 6.5 0 0 1-9.192-9.192l4-4a6.5 6.5 0 0 1 10.13 1.183l-2.237 2.237a3.5 3.5 0 0 0-5.772-1.299l-4 4a3.5 3.5 0 0 0 4.397 5.4 8.527 8.527 0 0 0 3.801.544l-1.127 1.127Z"
      fill={color}
    />
  </Svg>
);
export default Link;
