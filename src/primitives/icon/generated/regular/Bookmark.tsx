/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bookmark = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18.994c0 .868-1.029 1.324-1.672.741l-5.656-5.126a1 1 0 0 0-1.344 0l-5.656 5.126c-.643.583-1.672.127-1.672-.74V4Z"
      fill={color}
    />
  </Svg>
);
export default Bookmark;
