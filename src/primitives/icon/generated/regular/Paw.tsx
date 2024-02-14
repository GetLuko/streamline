/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Paw = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 3c0 1.105-.895 3-2 3s-2-1.895-2-3a2 2 0 1 1 4 0ZM17.352 12.587A.667.667 0 0 1 17 12a5 5 0 0 0-10 0 .667.667 0 0 1-.352.587 5 5 0 0 0 4.034 9.123 3.98 3.98 0 0 1 2.636 0 5 5 0 0 0 4.034-9.123ZM8 6c1.105 0 2-1.895 2-3a2 2 0 1 0-4 0c0 1.105.895 3 2 3ZM5 9c0 1.105-.895 3-2 3s-2-1.895-2-3a2 2 0 1 1 4 0ZM21 12c1.105 0 2-1.895 2-3a2 2 0 1 0-4 0c0 1.105.895 3 2 3Z"
      fill={color}
    />
  </Svg>
);
export default Paw;
