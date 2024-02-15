/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Attachment = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19.682 4.318a4.5 4.5 0 0 0-6.364 0l-.006.006-9.58 9.42a1.026 1.026 0 0 1-.07.06 2.5 2.5 0 0 0 3.626 3.444l9.702-9.175.04-.043a.75.75 0 0 0-1.06-1.06l-.01.01-9.274 8.747a1 1 0 0 1-1.372-1.454l9.253-8.729a2.75 2.75 0 0 1 3.953 3.822 1.01 1.01 0 0 1-.093.1l-9.756 9.226a4.5 4.5 0 0 1-6.353-6.374c.03-.03.062-.058.095-.084l9.494-9.333a6.5 6.5 0 0 1 9.19 9.195L10.484 22.707a1 1 0 0 1-1.414-1.414l10.611-10.611a4.5 4.5 0 0 0 0-6.364Z"
      fill={color}
    />
  </Svg>
);
export default Attachment;
