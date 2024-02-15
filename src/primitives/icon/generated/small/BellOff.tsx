/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BellOff = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M2.293 13H2a1 1 0 0 1-1-1v-.323c0-.374.303-.677.677-.677a.562.562 0 0 0 .499-.27C2.463 10.23 3 9.024 3 7a5 5 0 0 1 4.5-4.975V1.5a.5.5 0 0 1 1 0v.525a4.988 4.988 0 0 1 3.179 1.589l2.467-2.468a.5.5 0 0 1 .708.708l-2.569 2.568L1.854 14.854a.5.5 0 0 1-.708-.708L2.293 13ZM5.121 13l7.613-7.613C12.906 5.893 13 6.436 13 7c0 2.024.537 3.23.824 3.73.102.177.295.27.5.27.373 0 .676.303.676.677V12a1 1 0 0 1-1 1H5.121ZM6.268 14a2 2 0 0 0 3.464 0H6.268Z"
      fill={color}
    />
  </Svg>
);
export default BellOff;
