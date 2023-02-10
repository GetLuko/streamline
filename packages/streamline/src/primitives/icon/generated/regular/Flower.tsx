/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Flower = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1a4 4 0 0 1 3.612 2.28 4 4 0 0 1 5.109 5.108 4 4 0 0 1 0 7.224 4 4 0 0 1-5.109 5.108 4 4 0 0 1-7.224 0 4 4 0 0 1-5.108-5.108 4 4 0 0 1 0-7.224A4 4 0 0 1 8.388 3.28 4 4 0 0 1 12 1Zm0 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      fill={color}
    />
  </Svg>
);
export default Flower;
