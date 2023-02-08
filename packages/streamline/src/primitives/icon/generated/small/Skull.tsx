/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Skull = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1a7 7 0 0 0-7 7v3.5a1 1 0 0 0 .4.8l1.463 1.097a1 1 0 0 1 .232.245l.608.913a1 1 0 0 0 .832.445H5v-1.5a.5.5 0 0 1 1 0V15h1.5v-1.5a.5.5 0 0 1 1 0V15H10v-1.5a.5.5 0 0 1 1 0V15h.465a1 1 0 0 0 .832-.445l.608-.912a1 1 0 0 1 .232-.246L14.6 12.3a1 1 0 0 0 .4-.8V8a7 7 0 0 0-7-7Zm-.076 8a.5.5 0 0 0-.494.418l-.333 2A.5.5 0 0 0 7.59 12h.82a.5.5 0 0 0 .493-.582l-.333-2A.5.5 0 0 0 8.076 9h-.152ZM7 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill={color}
    />
  </Svg>
);
export default Skull;
