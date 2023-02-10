/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Tree = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M9.241 1.727c-.581-.97-1.901-.97-2.482 0l-.454.757-.708-.195c-1.17-.322-2.186.92-1.737 2.125l.048.13c-1.21.535-1.21 2.377 0 2.912l-.048.13c-.449 1.205.566 2.447 1.737 2.125l.498-.137A1 1 0 0 0 7 11v3a1 1 0 0 1-1 1h4a1 1 0 0 1-1-1v-3a1 1 0 0 0 .905-1.426l.498.137c1.17.322 2.186-.92 1.737-2.125l-.048-.13c1.21-.535 1.21-2.377 0-2.912l.048-.13c.449-1.205-.566-2.447-1.737-2.125l-.708.195-.454-.757Z"
      fill={color}
    />
  </Svg>
);
export default Tree;
