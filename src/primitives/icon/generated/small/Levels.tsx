/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Levels = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M1.16 5.244a.266.266 0 0 1 0-.488l6.006-2.584a2.109 2.109 0 0 1 1.668 0l6.006 2.584a.266.266 0 0 1 0 .488L8.834 7.828a2.109 2.109 0 0 1-1.668 0L1.16 5.244ZM13.186 10.044l1.654.712a.266.266 0 0 1 0 .488l-6.006 2.584c-.533.23-1.135.23-1.668 0L1.16 11.244a.266.266 0 0 1 0-.488l1.654-.712 3.957 1.703a3.109 3.109 0 0 0 2.458 0l3.957-1.703Z"
      fill={color}
    />
    <Path
      d="m14.84 7.756-1.654-.712-3.957 1.703a3.109 3.109 0 0 1-2.458 0L2.814 7.044l-1.654.712a.266.266 0 0 0 0 .488l6.006 2.584c.533.23 1.135.23 1.668 0l6.006-2.584a.266.266 0 0 0 0-.488Z"
      fill={color}
    />
  </Svg>
);
export default Levels;
