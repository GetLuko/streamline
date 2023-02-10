/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Compass = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.703 12.704a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.85-16.792a.698.698 0 0 1 .936.934l-2.904 5.914a4 4 0 0 1-1.827 1.827L7.14 17.787a.699.699 0 0 1-.934-.935l2.911-5.912a4 4 0 0 1 1.821-1.82l5.911-2.912Z"
      fill={color}
    />
  </Svg>
);
export default Compass;
