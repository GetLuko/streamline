/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Target = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M11.996 7.814a4 4 0 1 1-3.81-3.81l-.163-.813A1.544 1.544 0 0 1 7.997 3 5 5 0 1 0 13 8.003a1.542 1.542 0 0 1-.19-.026l-.814-.163Z"
      fill={color}
    />
    <Path
      d="M9.912 8.588a2 2 0 1 1-2.5-2.5l.978-1.063a3 3 0 1 0 2.585 2.585l-1.063.978Z"
      fill={color}
    />
    <Path
      d="M13.994 7.73a6 6 0 1 1-5.723-5.724c.051-.074.11-.144.174-.209l.704-.703a7 7 0 1 0 5.757 5.758l-.703.703a1.546 1.546 0 0 1-.209.175Z"
      fill={color}
    />
    <Path
      d="M9.152 2.504a.543.543 0 0 0-.148.49l.429 2.145a.543.543 0 0 1-.149.49L7.91 7.005A1 1 0 1 0 8.996 8.09l1.374-1.374a.543.543 0 0 1 .49-.149l2.146.43a.543.543 0 0 0 .49-.15l1.345-1.344a.543.543 0 0 0-.212-.9l-2.167-.722a.543.543 0 0 1-.343-.343l-.723-2.167a.543.543 0 0 0-.899-.212L9.152 2.504Z"
      fill={color}
    />
  </Svg>
);
export default Target;
