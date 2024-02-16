/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Video = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M13.2 5.733a1 1 0 0 0-.2.6v3.334a1 1 0 0 0 .2.6l1.9 2.533a.5.5 0 0 0 .9-.3v-9a.5.5 0 0 0-.9-.3l-1.9 2.533ZM4 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Z"
      fill={color}
    />
  </Svg>
);
export default Video;
