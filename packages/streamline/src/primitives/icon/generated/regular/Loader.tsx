/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Loader = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4a8 8 0 0 0-8 8 1.5 1.5 0 0 1-3 0A11 11 0 0 1 12 1a1.5 1.5 0 0 1 0 3Z"
      fill={color}
    />
  </Svg>
);
export default Loader;
