/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Search = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.215 17.336a9 9 0 1 1 2.121-2.121l5.225 5.224a1.5 1.5 0 0 1-2.122 2.122l-5.224-5.225Zm-.402-2.253a7 7 0 1 1 .27-.27 1.528 1.528 0 0 0-.27.27Z"
      fill={color}
    />
  </Svg>
);
export default Search;
