/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Edit = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.121 6.121A3 3 0 1 0 17.88 1.88L3.955 15.829a6.986 6.986 0 0 0-1.689 2.742c-.395 1.196-.924 2.799-1.242 3.774a.5.5 0 0 0 .63.63c.976-.317 2.579-.846 3.775-1.241a6.984 6.984 0 0 0 2.742-1.69l13.95-13.923Zm-2.827-2.829a1 1 0 0 1 1.414 1.415l-2.003 1.998-1.41-1.41 1.998-2.003Z"
      fill={color}
    />
  </Svg>
);
export default Edit;
