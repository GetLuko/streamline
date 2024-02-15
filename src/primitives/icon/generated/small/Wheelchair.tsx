/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Wheelchair = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM10.704 6.044a.496.496 0 0 0-.13-.039L9.161 5.77c-.33-.055-.65-.218-.969-.38-.448-.227-.893-.454-1.356-.376a1 1 0 0 0-.822 1.15l.5 3A1 1 0 0 0 7.5 10h2.73a.5.5 0 0 1 .493.418l.29 1.746A1 1 0 0 0 12 13h1a1 1 0 1 0 0-2h-.153l-.36-2.164A1 1 0 0 0 11.5 8H8.77a.5.5 0 0 1-.492-.418L8.18 7h2.31a.497.497 0 0 0 .507-.459.496.496 0 0 0-.294-.497Z"
      fill={color}
    />
    <Path
      d="M5.114 6.684a4.5 4.5 0 1 0 5.664 6.9 2.005 2.005 0 0 1-.62-.806 3.5 3.5 0 1 1-4.86-4.998l-.184-1.096Z"
      fill={color}
    />
  </Svg>
);
export default Wheelchair;
