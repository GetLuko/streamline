/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const OrderUp = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M7.617 5.173a.5.5 0 0 1 .758.003c.894 1.055 3.099 3.647 3.447 3.945a.501.501 0 0 1-.325.882H4.503a.501.501 0 0 1-.352-.857c1.242-1.218 2.323-2.661 3.466-3.973Z"
      fill={color}
    />
  </Svg>
);
export default OrderUp;
