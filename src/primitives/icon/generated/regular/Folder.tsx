/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Folder = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 4a2 2 0 0 0-2 2v12.5a1.5 1.5 0 0 0 3 0V11a3 3 0 0 1 3-3h12.5c.276 0 .506-.227.438-.495A2 2 0 0 0 18 6h-4.882A1.809 1.809 0 0 1 11.5 5c-.306-.613-.933-1-1.618-1H3Z"
      fill={color}
    />
    <Path
      d="M23 10.5a.5.5 0 0 0-.5-.5H7a1 1 0 0 0-1 1v7c0 .421-.065.827-.186 1.209-.116.367.133.791.518.791H21a2 2 0 0 0 2-2v-7.5Z"
      fill={color}
    />
  </Svg>
);
export default Folder;
