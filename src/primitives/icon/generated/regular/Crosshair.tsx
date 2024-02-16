/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Crosshair = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 1h2v2.055A9.004 9.004 0 0 1 20.945 11H23v2h-2.055A9.004 9.004 0 0 1 13 20.945V23h-2v-2.055A9.004 9.004 0 0 1 3.055 13H1v-2h2.055A9.004 9.004 0 0 1 11 3.055V1Zm8 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      fill={color}
    />
  </Svg>
);
export default Crosshair;
