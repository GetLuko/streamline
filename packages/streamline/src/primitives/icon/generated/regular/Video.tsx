/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Video = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4ZM22.252 6.338 19 10v4l3.252 3.662c.611.688 1.748.256 1.748-.664V7.002c0-.92-1.137-1.352-1.748-.664Z"
      fill={color}
    />
  </Svg>
);
export default Video;
