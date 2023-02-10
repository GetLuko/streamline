/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Text = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1 1.618 1.618 0 0 1-1.447-.894l-.106-.212A1.618 1.618 0 0 0 11 3h-1a1 1 0 0 0-1 1v6.75a2.5 2.5 0 0 0 1 2l.6.45A1 1 0 0 1 10 15H6a1 1 0 0 1-.6-1.8l.6-.45a2.5 2.5 0 0 0 1-2V4a1 1 0 0 0-1-1H5c-.613 0-1.173.346-1.447.894l-.178.356c-.23.46-.7.75-1.213.75H2a1 1 0 0 1-1-1V2Z"
      fill={color}
    />
  </Svg>
);
export default Text;
