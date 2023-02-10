/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Gender = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 0a1 1 0 1 0 0 2h1.586l-2.293 2.293c-.034.034-.065.07-.093.107A7 7 0 1 0 11 16.93V19H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2.07A7.001 7.001 0 0 0 17.6 5.8c.038-.028.073-.059.107-.093L20 3.414V5a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1h-4Zm-5 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      fill={color}
    />
  </Svg>
);
export default Gender;
