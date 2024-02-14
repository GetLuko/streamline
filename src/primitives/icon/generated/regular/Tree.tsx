/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Tree = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13.87 2.005c-.873-1.34-2.867-1.34-3.74 0l-.319-.163c-1.342-.686-2.944.284-2.92 1.77l-.347-.005c-1.468-.017-2.35 1.595-1.523 2.787a1.774 1.774 0 0 0 0 3.212c-.826 1.192.055 2.804 1.523 2.787l.347-.005c-.02 1.218 1.054 2.09 2.181 1.986A1 1 0 0 0 10 15v6a2 2 0 0 1-2 2h8a2 2 0 0 1-2-2v-6a1 1 0 0 0 .928-.626c1.127.104 2.2-.768 2.181-1.986l.347.005c1.468.017 2.35-1.595 1.523-2.787a1.774 1.774 0 0 0 0-3.212c.826-1.192-.055-2.804-1.523-2.787l-.347.005c.023-1.486-1.578-2.456-2.92-1.77l-.319.163Z"
      fill={color}
    />
  </Svg>
);
export default Tree;
