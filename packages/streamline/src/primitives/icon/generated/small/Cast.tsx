/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Cast = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M6 1a2 2 0 0 1 2 2v3.191L5.25 7.566 3 6.216V4.86l2.658-.886a.5.5 0 0 0-.316-.948L3 3.806V3a2 2 0 0 1 2-2h1ZM3 7.383v1.308l1.19-.595L3 7.384ZM3 9.81V11c0 .9.297 1.731.8 2.4l1.784-2.677.005-.008L4.357 9.13 3 9.809ZM4.513 14.133A3.983 3.983 0 0 0 7 15h.14l.539-1.617a.504.504 0 0 1-.074-.076l-1.369-1.76-1.723 2.586ZM8.194 15h2.456l-1.535-2.764L8.194 15ZM11.794 15H13a2 2 0 0 0 2-2v-1a2 2 0 0 0-1.261-1.86l-.792 1.584a.5.5 0 1 1-.894-.448L12.69 10h-2.83l-.317.95 2.25 4.05ZM8.812 9.982A1 1 0 0 1 8 9V7.31L5.27 8.673l2.785 3.582.757-2.274Z"
      fill={color}
    />
  </Svg>
);
export default Cast;
