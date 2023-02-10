/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const WaterOff = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23a7 7 0 0 0 7-7c0-1.793-.478-3.714-1.183-5.574L7.173 21.07A6.976 6.976 0 0 0 12 23Zm5-7a1 1 0 1 0-2 0 3 3 0 0 1-3 3 1 1 0 1 0 0 2 5 5 0 0 0 5-5Z"
      fill={color}
    />
    <Path
      d="M16.023 6.562a47.19 47.19 0 0 0-3.275-5.17.916.916 0 0 0-1.496 0C9.446 3.868 5 10.527 5 16c0 .493.05.974.148 1.438l-2.855 2.855a1 1 0 1 0 1.414 1.414l18-18a1 1 0 0 0-1.414-1.414l-4.27 4.27Z"
      fill={color}
    />
  </Svg>
);
export default WaterOff;
