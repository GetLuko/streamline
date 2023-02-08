/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Photo = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 2c-.306-.613-.933-1-1.618-1H7.118c-.685 0-1.312.387-1.618 1-.306.613-.933 1-1.618 1H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-.882A1.809 1.809 0 0 1 10.5 2ZM8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill={color}
    />
    <Path d="M3 1a1 1 0 0 1 1 1H2a1 1 0 0 1 1-1Z" fill={color} />
  </Svg>
);
export default Photo;
