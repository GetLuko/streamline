/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Wall = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.514 1.126a1 1 0 0 1 .972 0l9 5A1 1 0 0 1 22 7v10a1 1 0 0 1-.514.874l-9 5a1 1 0 0 1-.972 0l-9-5A1 1 0 0 1 2 17V7a1 1 0 0 1 .514-.874l9-5ZM12 20.856 5.06 17 12 13.144 18.94 17 12 20.856Z"
      fill={color}
    />
  </Svg>
);
export default Wall;
