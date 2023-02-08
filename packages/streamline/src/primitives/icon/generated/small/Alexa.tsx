/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Alexa = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path d="M11 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 7v.037c-.017 4.219-2.878 7.669-6.5 7.962a.47.47 0 0 1-.5-.48v-1.602A6.002 6.002 0 0 1 8 1a6 6 0 0 1 6 6Zm-1 0A5 5 0 1 1 3 7a5 5 0 0 1 10 0Z"
      fill={color}
    />
  </Svg>
);
export default Alexa;
