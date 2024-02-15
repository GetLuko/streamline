/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BarCode = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M1 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0V7ZM5 7a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0V7ZM10 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1ZM13 11a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0v-6ZM18 6a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1ZM21 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0V7ZM6 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color}
    />
  </Svg>
);
export default BarCode;
