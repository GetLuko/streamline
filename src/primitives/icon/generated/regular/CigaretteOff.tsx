/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CigaretteOff = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21.707 3.707a1 1 0 0 0-1.414-1.414L12.586 10H.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h8.086l-6.293 6.293a1 1 0 1 0 1.414 1.414l18-18ZM18.243 10l-4 4H19.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1.257ZM23.5 10a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5ZM22 10.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Z"
      fill={color}
    />
  </Svg>
);
export default CigaretteOff;
