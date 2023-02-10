/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Ladder = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 2a1 1 0 0 1 2 0v3h12V2a1 1 0 1 1 2 0v20a1 1 0 1 1-2 0v-3H6v3a1 1 0 1 1-2 0V2Zm2 15h12v-4H6v4ZM18 7v4H6V7h12Z"
      fill={color}
    />
  </Svg>
);
export default Ladder;
