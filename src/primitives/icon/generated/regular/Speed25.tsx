/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Speed25 = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 15c0 2.075-4.925 5-11 5S1 17.075 1 15C1 8.925 5.925 4 12 4s11 4.925 11 11Zm-9 0a2 2 0 1 1-4 0c0-3.105.895-9 2-9s2 5.895 2 9ZM8.503 8.934a1 1 0 0 0-1-1.731l-.009.004a1 1 0 0 0 1.003 1.731l.006-.004Zm7.994-1.731a1 1 0 1 0-1 1.731l.006.004a1 1 0 0 0 1.003-1.73l-.009-.005Zm3.296 3.292a1 1 0 0 0-1.731 1.002l.004.006a1 1 0 0 0 1.731-1l-.004-.008ZM5.938 11.497a1 1 0 0 0-1.73-1.002l-.005.008a1 1 0 1 0 1.731 1l.004-.006Z"
      fill={color}
    />
  </Svg>
);
export default Speed25;
