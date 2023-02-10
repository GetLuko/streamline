/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Painting = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.375 1.22a1 1 0 0 1 1.25 0L17.35 5H21a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3.65l4.725-3.78ZM12 3.28 14.15 5h-4.3L12 3.28Zm7 6.22a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM8.8 9.397l4.96 6.617 2.492-2.695a1 1 0 0 1 1.481.014l3.014 3.383a1 1 0 0 1 .253.665V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2.667a1 1 0 0 1 .2-.6l4-5.336a1 1 0 0 1 1.6 0Z"
      fill={color}
    />
  </Svg>
);
export default Painting;
