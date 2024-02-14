/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Peak = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM8.682 9.843a4.506 4.506 0 0 0 2.466-1.708l5.462 7.89 3.738-4.485a1.5 1.5 0 1 1 2.304 1.92l-5 6a1.5 1.5 0 0 1-2.385-.106L8.682 9.843ZM3.631 7.8a4.515 4.515 0 0 0 2.304 1.92l-2.283 2.74a1.5 1.5 0 1 1-2.304-1.92L3.63 7.8Z"
      fill={color}
    />
  </Svg>
);
export default Peak;
