/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bold = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16.2 10.73c1.263-.861 2.149-2.276 2.149-3.587 0-2.906-2.28-5.143-5.21-5.143H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.168C16.89 20 19 17.814 19 15.127a4.798 4.798 0 0 0-2.8-4.397ZM8.907 5.214h3.907c1.08 0 1.953.862 1.953 1.929a1.938 1.938 0 0 1-1.953 1.928H8.907V5.214Zm4.558 11.572H8.907v-3.857h4.558c1.081 0 1.954.861 1.954 1.928a1.939 1.939 0 0 1-1.954 1.929Z"
      fill={color}
    />
  </Svg>
);
export default Bold;
