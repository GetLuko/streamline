/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Area = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16.586-1h-3.172L4 15.414v3.172L18.586 4ZM9.414 4h3.172L4 12.586V9.414L9.414 4ZM6.586 4H5a1 1 0 0 0-1 1v1.586L6.586 4ZM5.414 20h3.172L20 8.586V5.414L5.414 20Zm9.172 0h-3.172L20 11.414v3.172L14.586 20Zm2.828 0H19a1 1 0 0 0 1-1v-1.586L17.414 20Z"
      fill={color}
    />
  </Svg>
);
export default Area;
